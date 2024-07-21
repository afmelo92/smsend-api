const { Router } = require("express");

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.send({ message: "Register route", data: { email, password } });
});

authRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.send({ message: "login route", data: { email, password } });
});

module.exports = authRouter;
