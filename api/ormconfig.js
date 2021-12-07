/**
 * @ormconfig is a document that contains an object of configuration values
 * @type what kind of db you will use in the app
 * @host_ the host of the database
 * @port the port that will use DB
 * @username this username will be use to connect to the db
 * @password
 * @database specfic database to use in the config
 * @entities all the entities or models that will be allow in this project
 * @synchronize if we want to add new entity or a column, the code will synchronize with the DB
 * @logging file that contains all the warnings, errors, queries, schema build process, info, logs
 */
module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "test123",
  database: process.env.MYSQL_DATABASE || "apimysql",
  entities: ["src/models/**/*.js"],
  synchronize: true,
  logging: true,
};
