module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  db: process.env.DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
