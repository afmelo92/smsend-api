import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import { isValidEmail } from '../utils/validators';
import prisma from '../db';
import config from '../config';

const router = Router();

/**
 * CREATE USER
 */
router.post('/users', async (req: Request, res: Response) => {
  const { name, email, password, confirm_password } = req.body;

  if (!name || !email || !password || !confirm_password) {
    return res.status(400).json({
      message: 'All fields required.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: 'Invalid email.',
    });
  }

  if (password !== confirm_password) {
    return res.status(400).json({
      message: 'Password and Confirm Password must match.',
    });
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.salt);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      name: true,
      email: true,
      created_at: true,
    },
  });

  return res.json({ message: 'User created.', data: newUser });
});

/**
 * GET USERS
 */
router.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      uid: true,
      name: true,
      email: true,
    },
  });
  return res.json({
    message: 'Ok.',
    data: [...users],
  });
});

export default router;
