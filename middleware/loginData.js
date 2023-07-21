const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("./../models/Users");
const mongoose = require("mongoose");
console.log("jwle");
const loginData = (req, res, next) => {
  //    To get the id from the auth token

  const token = req.header("token");
  console.log(token, "mimddlwarwe");
  //   console.log(token);
  if (!token) {
    res.status(401).json("Please authenticate using a valid token");
    return;
  }

  try {
    console.log("hi");
    const data = jwt.verify(token, JWT_SECRET);
    console.log(data.user, "hi");
    console.log(data, "lkj");
    if (!data) {
      res.status(404).json("error in data");
    }
    req.user = data.user;
    console.log(req.user, 321);
    next();
  } catch (error) {
    res.status(400).json("Error from middleware authentication");
  }
};

module.exports = loginData;
