const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/users", (req, res) => {
  res.send({ message: "users route" });
});

module.exports = usersRouter;
