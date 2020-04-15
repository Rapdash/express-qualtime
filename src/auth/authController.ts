import * as bcrypt from "bcrypt";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { } from "../errors";
import { UserEntity } from "../user";