import "@babel/polyfill";
import http from "http";
import app from "@app";
import chalk from "chalk";
import { getEnv } from "@config/env";
import { createConnection } from "typeorm";

const { PORT_NODE, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } =
  getEnv();

const PORT = process.env.PORT || PORT_NODE;
// 3005

http.Server(app).listen(PORT, async () => {
  try {
    let typeConn = await createConnection();
    console.log(chalk.green("DB CONNECTED "));
    console.log(chalk.green("Server started 1:"));
    console.log(chalk.green(`Api started at : http://localhost:${PORT}/api`));
  } catch (error) {
    console.error(error);
  }
});
