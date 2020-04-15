import * as bcrypt from "bcrypt";
import { Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { EmailTakenError } from "../errors";
import { UserEntity } from "../user";
import { RegisterUserDto } from "./RegisterUserDto";
import { createJwt } from "./utils/createJwt";

export const register = async (request: Request, response: Response, next: NextFunction) => {c
  const userRepository = getRepository(UserEntity);
  const newUserData: RegisterUserDto = request.body;
  // if this throws, the router-level async handler will catch it.
  // I prefer to handle "unexpected" errors like this could be with a library.
  if (await userRepository.findOne({ email: newUserData.email })) {
    // This error, on the other hand, is handled explicitly with next().
    // I prefer to follow the express pattern when intentionally throwing.
    next(new EmailTakenError(newUserData.email));
  } else {
    const password_hash = await bcrypt.hash(newUserData.password, 10);
    const user = userRepository.create({
      ...newUserData, 
      password_hash
    });
    await userRepository.save(user);
    user.password_hash = undefined;
    const tokenData = createJwt(user);
  }
}