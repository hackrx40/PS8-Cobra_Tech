const express = require("express");
const router = express.Router();
const customerController = require("./../controller/customerController");
router.route("/register").post(customerController.registerCustomer);

module.exports = router;
