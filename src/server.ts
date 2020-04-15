import "reflect-metadata";
import { config as configureEnv } from "dotenv";
import { createConnection } from "typeorm"
import express, { json } from "express";

import { validateEnv, ormConfig } from "./utils";


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
  app.use(json());
  // Add 
  app.
}
