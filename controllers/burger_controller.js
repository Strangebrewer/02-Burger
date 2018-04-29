var express = require("express");
var router = express.Router();
// var path = require("path");
var exphbs = require("express-handlebars"); // these are not called for in the instructions - if they're not needed, remove them.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", "" + req.body.name, function (result) {
    res.json({ name: req.body.name });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = `id = ${req.params.id}`;
  
  // return console.log(req.body);
  var set = `devoured = ${req.body.devoured}`;
  burger.updateOne(set, condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = `id = ${req.params.id}`;
  burger.deleteOne(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;