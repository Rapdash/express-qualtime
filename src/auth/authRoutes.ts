import { Router } from "express";

import { register } from ".";
import { validationMiddleware } from "../middleware";
import { RegisterUserDto } from "./RegisterUserDto";

export const router = Router();

router.post('/register', validationMiddleware(RegisterUserDto), )