const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./connection.js");
const routes = require('./routes/routes.js');

app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "https://meancrudapp.000webhostapp.com/"}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});



// Access - Control - Allow - Origin: https://meancrudapp.000webhostapp.com/
// Access - Control - Allow - Methods: POST, GET, PUT, DELETE, OPTIONS
// Access - Control - Allow - Headers: Content - Type

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://meancrudapp.000webhostapp.com/');
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.listen(9000, function () {
    console.log("Server Started at port 9000...");
});

app.use('/students', routes);