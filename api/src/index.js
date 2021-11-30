import "@babel/polyfill";
import http from "http";
import app from "@app";
import chalk from "chalk";
import { getEnv } from "@config/env";
import mysql from "mysql";

const { PORT_NODE, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } =
  getEnv();

const PORT = process.env.PORT || PORT_NODE;
// 3005

http.Server(app).listen(PORT, async () => {
  try {
    const connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
    });
    /*

            host: "localhost",
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      port: MYSQL_PORT,
*/
    connection.connect();
    const queryTables = connection.query(
      "SHOW DATABASES",
      function (err, results, fields) {
        if (err) throw err;
        console.log(results[0]);
      }
    );
    console.log(chalk.green("DB CONNECTED "));
    console.log(chalk.green("Server started 1:"));
    console.log(chalk.green(`Api started at : http://localhost:${PORT}/api`));
  } catch (error) {
    console.error(error);
    connection.end();
  }
});
