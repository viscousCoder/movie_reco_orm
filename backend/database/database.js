const { Pool } = require("pg");
require("dotenv").config();
const typeorm = require("typeorm");
const path = require("path");

const dataSource = new typeorm.DataSource({
  type: "postgres",
  port: process.env.CUSTOMSQLPORT,
  host: process.env.CUSTOMSQLHOST,
  username: process.env.CUSTOMSQLUSER,
  password: process.env.CUSTOMSQLPASSWORD,
  database: process.env.CUSTOMSQLDB,
  synchronize: true,
  entities: [path.join(__dirname, "..", "entity/**/*.js")],
  logging: true,
});

module.exports = { dataSource };
