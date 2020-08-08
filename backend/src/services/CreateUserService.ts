import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/App.Error';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateuserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExist = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new AppError('Email address alredy used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateuserService;
