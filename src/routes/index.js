const { Router } = require("express");
const authRouter = require("./auth.js");
const usersRouter = require("./users.js");
const smsRouter = require("./sms.js");

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(smsRouter);

router.use("/", (req, res) => {
  res.json({ message: "Welcome to SMSend!" });
});

module.exports = router;
