// const { Pool } = require("pg");
// require("dotenv").config();
// const typeorm = require("typeorm");
// const path = require("path");

// const dataSource = new typeorm.DataSource({
// import { Pool } from "pg";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const dataSource = new DataSource({
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

// module.exports = { dataSource };
