import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (req, res) => {
  res.send({ message: 'users route' });
});

export default usersRouter;
