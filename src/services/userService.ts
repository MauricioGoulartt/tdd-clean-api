import * as jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser } from '../interfaces/IUser';

export async function signup(userData: IUser) {
  if (!userData.name) {
    throw new Error('Name is required');
  }

  if (userData.email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userData.email)) {
      throw new Error('Invalid email format');
    }

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Email already exists');
    }
  }

  const user = new User({
    name: userData.name,
    undername: userData.undername,
    gender: userData.gender,
    email: userData.email,
    password: userData.password,
  });

  try {
    const savedUser = await user.save();

    const userObject = savedUser.toObject();

    const { password, ...userWithoutPassword } = userObject;
    const { _id, created_at, modified_at } = userWithoutPassword;

    return {
      id: _id,
      created_at,
      modified_at,
    };
  } catch (err) {
    if (err.code === 11000) {
      throw new Error('Email already exists');
    } else {
      throw new Error(err.message);
    }
  }
}

export async function signin(loginData: { email: string; password: string }) {
  const user = await User.findOne({ email: loginData.email });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  if (loginData.password !== user.password) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

  return { token };
}

export async function getUser(token: string) {
  const tokenData = token.split(' ')[1];

  if (!tokenData) {
    throw new Error('Invalid token');
  }

  const decoded = jwt.verify(tokenData, process.env.JWT_SECRET);

  if (typeof decoded === 'string') {
    throw new Error('Invalid token');
  }

  const user = await User.findById(decoded.id);

  return {
    email: user?.email,
    id: user?._id,
    created_at: user?.created_at,
    modified_at: user?.modified_at,
  };
}
