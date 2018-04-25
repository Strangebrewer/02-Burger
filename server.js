var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

//  stupid is as stupid does - for FUN!
var addBurger = process.argv[2];
var changeBurger = process.argv[3];
var changeWhich = process.argv[4];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use('/static', express.static('public'));
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  These will all be moved into 'burger.js' as the app structure gets worked out
//  The variables will also need to be removed/changed - obviously
orm.insertOne(addBurger);
orm.selectAll();
orm.updateOne("burger_name", "id", changeBurger, changeWhich);
orm.selectAll();

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});