const { Sequelize } = require("sequelize");

module.export = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});
