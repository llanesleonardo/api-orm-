module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "test123",
  database: process.env.MYSQL_DATABASE || "apimysql",
  entities: ["src/models/*.js"],
  synchronize: true,
  logging: false,
};
