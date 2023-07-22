const mongoose = require("mongoose");

const policyPurchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  occupation: {
    type: String,
  },
  income: { type: Number, required: true },
});

module.exports = mongoose.model("PolicyPurchase", policyPurchaseSchema);