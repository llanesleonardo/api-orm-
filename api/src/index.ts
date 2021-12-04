import "@babel/polyfill";
import http from "http";
import app from "./app";
import chalk from "chalk";
import { getEnv } from "./config/env";
import { createConnection } from "typeorm";

/**
 * @destructuring of the getEnv() function to get enviromental variables from .env file (this only works on development mode)
 */
/**
 * @PORT variable that choose a value of a port depending on the enviroment
 */
const PORT = process.env.PORT || 5000;
// 3005

/**
 * @param  {} app
 * @param  {} PORT
 * @typeConn variable that create a connection to the typeORM Entities and Schemas (only one connection need it)
 */
app.listen(PORT, async () => {
  try {
    let typeConn = await createConnection();
    console.log(chalk.green("DB CONNECTED "));
    console.log(chalk.green("Server started 1:"));
    console.log(chalk.green(`Api started at : http://localhost:${PORT}/api`));
  } catch (error) {
    console.error(error);
  }
});
