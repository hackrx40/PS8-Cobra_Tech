const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const authRouter = require("./routes/userRouter");
const policyRouter = require("./routes/buyPolicyRouter");
const paymentRoutes = require("./routes/payment")
app.use("/api/v1/bajaj/user", authRouter);
app.use("/api/v1/bajaj/policy", policyRouter);
app.use("/api/payment/",paymentRoutes)
const db = process.env.database;
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("error connecting database", err);
  });
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serving on port: ${port}`);
});
