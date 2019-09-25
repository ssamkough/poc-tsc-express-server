// lib/config/database.ts
import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "some_db",
  dialect: "sqlite",
  storage: ":memory:"
});
