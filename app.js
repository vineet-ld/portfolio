const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const utils = require("./utils/utils");

const port = process.env.PORT || 3002;

var app = express();

if(!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getYear", () => {
    return new Date().getFullYear();
});

app.get("/", (request, response) => {
    utils.addServerLog("GET /");
    response.render("home.hbs");
});

app.listen(port, () => {
    utils.addServerLog(`Server started to port ${port}`);
    console.log(`Server started to port ${port}`);
});