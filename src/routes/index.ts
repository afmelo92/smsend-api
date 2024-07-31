import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import smsRouter from './sms';

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(smsRouter);

router.use('/', (req, res) => {
  res.json({ message: 'Welcome to SMSend Digital Ocean!' });
});

export default router;
