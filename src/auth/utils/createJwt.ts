import { UserEntity } from "../../user";
import * as jwt from "jsonwebtoken";

export const createJwt = (user: UserEntity): string => {
  const expiresIn = 60 * 60 * 24; // One Day
  const secret = process.env.JWT_SECRET;
  const dataStoredInToken: { id: string } = {
    id: user.id,
  };
  return jwt.sign(dataStoredInToken, secret, { expiresIn });
};
