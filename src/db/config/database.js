require('dotenv').config()

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      underscoredAll: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    // pool: {
    //   max: 10,
    //   min: 1
    // }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}