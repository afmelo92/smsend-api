import { Router } from 'express';

const smsRouter = Router();

smsRouter.get('/sms', (req, res) => {
  res.send({ message: 'sms route' });
});

export default smsRouter;
