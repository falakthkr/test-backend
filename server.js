const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./models/db.js');
const cors = require("cors");

dotenv.config();
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());
app.use(cors());

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const blogsRoute = require("./routes/blogs")

app.use("/users", userRoute)
app.use("/login", authRoute)
app.use("/blogs-app", blogsRoute)

mongoose.connect(
    process.env.ATLAS_URI.toString(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log("Error connecting the database")
        } else {
            console.log("Database successfully connected")
        }
    }
)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`The server is up and running on ${port}!`)
})