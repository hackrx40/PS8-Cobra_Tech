const Users = require("./../models/Users");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const nodemailer = require("nodemailer");
const axios = require("axios");
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "kamrankhot29@gmail.com",
    pass: process.env.email_password,
  },
});
let response_data, user;
module.exports.registerUser = async (req, res) => {
  try {
    console.log("email", 231);
    console.log(req.body);
    const { email, phone, pan, password, dob } = req.body;
    console.log(email, 231);
    const emailExist = await Users.findOne({ email });
    const phoneExist = await Users.findOne({ phone: req.body.phone });
    const panExist = await Users.findOne({ pan: req.body.pan });
    console.log(emailExist, 678);
    console.log(panExist, 123);
    console.log(phoneExist);
    if (emailExist || phoneExist || panExist) {
      res.status(404).json("Customer already exists");
    }

    // PAN verificaion
    let pan_number = pan;

    const options = {
      method: "POST",
      url: "https://api.gridlines.io/pan-api/fetch-detailed",
      headers: {
        "X-Auth-Type": "API-Key",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": "d5p1intjd05HH42K9t8USsncpwj92BfO",
      },
      data: { pan_number: `${pan_number}`, consent: "Y" },
    };

    async function fetchData() {
      try {
        const { data } = await axios.request(options);
        console.log(data.data.pan_data);
        response_data = data;
        return data.data.pan_data.document_id;
      } catch (error) {
        console.error(error);
      }
    }
    // console.log(pan_data, 32123);
    const response_pan = await fetchData();
    console.log(response_pan, 321);
    if (response_pan !== pan) {
      res.status(400).json("wrong PAN details");
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = new Users({
      email,
      phone,
      pan,
      password: secPass,
      dob,
      data: response_data,
    });
    user = await user.save();
    const data = {
      user: {
        id: user,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });
    const info = await transporter.sendMail({
      from: '"Bajaj" <Bajaj.com>', // sender address
      to: email, // list of receivers
      subject: "Successful registeration  at bajaj ✔", // Subject line
      text: `Congratulations for successfully registering on Bajaj `, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    res.status(200).json({ authtoken });
    console.log("Message sent: %s", info.messageId);
    //   now sending an otp to Customer as he is registering
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// login
module.exports.login = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  console.log(secPass);

  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    const pass = user.password;

    if (!user) {
      return res.status(400).json({ error: "invalid login credential" });
    }

    const passwordCompare = await bcrypt.compare(password, pass);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ error: "invalid login credential" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.status(200).json({
      success,
      authToken,
    });
  } catch (err) {
    res.status(400).json({
      status: "error from login side",
      message: err,
    });
  }
};

// LoginData
module.exports.loginData = async (req, res) => {
  try {
    let status = true;
    const userId = req.user.id;
    const user = await Users.findById(userId).select("-password");
    console.log(userId, 76767);
    console.log(user, 8998);

    res.status(200).json({
      status: true,
      user: user,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
