const Sequelize = require("sequelize");
require("dotenv");


// DATABASE
const db = new Sequelize("style_hub", "root", process.env.password, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;