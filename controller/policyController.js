const policyPurchase = require("./../models/PolicyPurchase");
const Policy = policyPurchase;
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
    Customer: "kamrankhot29@gmail.com",
    pass: process.env.email_password,
  },
});
let response_data, user;
module.exports.buyPolicy = async (req, res) => {
  try {
    const buyPolicy = new Policy(req.body);
    const savedPolicy = await buyPolicy.save();
    res.status(200).json(savedPolicy);
  } catch (err) {
    res.status(500).json(err);
  }
};
