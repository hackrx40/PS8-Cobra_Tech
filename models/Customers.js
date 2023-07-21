const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
    length: 10,
    required: true,
  },
  pan: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  data: {},
});

module.exports = mongoose.model("Customers", customerSchema);
