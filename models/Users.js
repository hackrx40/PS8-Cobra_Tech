const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
    data: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
