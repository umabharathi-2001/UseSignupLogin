const Sequelize = require("sequelize");
const dbConfig = require("../config/db");
const sequelize = new Sequelize(
  dbConfig.db,
  dbConfig.dbUser,
  dbConfig.dbPassword,
  {
    host: dbConfig.dbHost,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userProfile = require("./user.model")(sequelize, Sequelize);

module.exports = db;
