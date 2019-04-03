require("dotenv").config();
const express = require("express");

const db = require("./config/database")


const app = express();
app.use(express.json());

const homeRoute = require ("./routes/api/home");
const userRoute = require ("./routes/api/userRoute");
const userLogin =  require("./routes/api/auth")

app.use ("/api", userRoute);
app.use ("/auth", userLogin);
app.use (homeRoute);

// PORT
const PORT = process.env.PORT || 5000;

db.sync({
    force: false,
}).then(results =>{
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`);
        })
    }).catch (err => console.log(err));