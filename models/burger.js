var orm = require("../config/orm.js");

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (response) {
      // console.log(response);
      callback(response);
    });
  },

  insertOne: function (colName, NewData, callback) {
    orm.insertOne("burgers", colName, NewData, function (response) {
      callback(response);
    });
  },

  updateOne: function (vals, condition, callback) {
    orm.updateOne("burgers", vals, condition, function (response) {
      callback(response);
    });
  },

  deleteOne: function (condition, callback) {
    orm.deleteOne("burgers", condition, callback, function (response) {
      callback(response);
    })
  }

};

module.exports = burger;

// the model is the 'liason' between your orm and your other functionality; the orm is the 'liason' between your model and the db