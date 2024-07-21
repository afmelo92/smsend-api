const { Router } = require("express");

const smsRouter = Router();

smsRouter.get("/sms", (req, res) => {
  res.send({ message: "sms route" });
});

module.exports = smsRouter;
