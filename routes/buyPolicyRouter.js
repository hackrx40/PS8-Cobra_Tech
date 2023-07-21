const express = require("express");
const policyController = require("./../controller/policyController");
const loginData = require("./../middleware/loginData");
const router = express.Router();

router.route("/buyPolicy").post(loginData, policyController.buyPolicy);
// router.route("/login").post(authController.login);
// router.route("/loginData").post(loginData, authController.loginData);
module.exports = router;
