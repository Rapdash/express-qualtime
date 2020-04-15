import { Router } from "express";
import asyncHandler from "express-async-handler";

import { register } from ".";
import { validationMiddleware } from "../middleware";
import { RegisterUserDto } from "./RegisterUserDto";

export const router = Router();

router.post('/register', validationMiddleware(RegisterUserDto), asyncHandler(register));