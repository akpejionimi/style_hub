require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./config/database")


const app = express();
app.use(cors());
app.use(express.json());

const userRoute = require ("./routes/api/userRoute");
const userLogin =  require("./routes/api/auth")
const postRoute =  require("./routes/api/post")

//Route
app.use ("/api/user", userRoute);
app.use ("/api/auth", userLogin);
app.use ("/api/post", postRoute);

// PORT
const PORT = process.env.PORT || 5000;

db.sync({
    force: false,
}).then(results =>{
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`);
        })
    }).catch (err => console.log(err));