var connection = require("./connection.js");

var orm = {
  selectAll: function (table, callback) {
    var queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      var resArr = [];
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        var resObj = {
          id: element.id,
          name: element.burger_name,
          devoured: element.devoured
        }
        resArr.push(resObj);
      }
      callback(resArr);
    });
  },

  insertOne: function (table, colName, newData, callback) {
    var queryString = `INSERT INTO ${table} (${colName}) VALUES (?)`;
    connection.query(queryString, newData, function (err, res) {
      if (err) throw err;
      // console.log(res);
      callback(res);
    });
  },

  updateOne: function (table, vals, condition, callback) {
    var queryString = `UPDATE ${table} SET ${vals} WHERE ${condition}`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      // console.log(res);
      callback(res);
    });
  },

  deleteOne: function (table, condition, callback) {
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      // console.log(res);
      callback(res);
    });
  }
}

module.exports = orm;