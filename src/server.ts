import "reflect-metadata";
import { config as configureEnv } from "dotenv";
import { createConnection } from "typeorm"
import * as express from "express";
import * as logger from "morgan";

import { validateEnv, ormConfig } from "./config";


configureEnv();
validateEnv();

const main = async () => {
  try {
    await createConnection(ormConfig);
  } catch (error) {
    console.log('Error Connecting To The Database');
    process.exit(1);
  }
  const app = express();
  // Set up JSON parsing from req.body
  app.use(express.json());
  // Add logging via morgan
  app.use(logger("dev"));

  app.listen(process.env.PORT || 1337, () => {
    console.info(`Server Started on ${process.env.PORT}`);
  });
}

main();