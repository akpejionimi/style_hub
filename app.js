const express = require("express");
const Sequelize = require("sequelize");
const cors = require("cors");
const db = require("./config/database");
const PORT = process.env.PORT || 7000;
const app = express();
require("dotenv");

// MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// ROUTES
const getRoute = require("./routes/post");
app.use("/posts", getRoute)



// PORT
db.sync({
    force: false,
}).then(results =>{
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`);
        })
    }).catch (err => console.log(err));