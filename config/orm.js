var connection = require("./connection.js");

var orm = module.exports = {};

orm.selectAll = function () {
  var query = "SELECT * FROM burgers";
  connection.query(query, function (err, res) {
    if (err) throw err;
    var resArr = [];
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      var resObj = {
        name: element.burger_name,
        status: element.devoured
      }
      resArr.push(resObj);
    }
    console.log(resArr);
  });
}

orm.insertOne = function (newData) {
  var insert = "INSERT INTO burgers (burger_name) VALUES (?)";
  connection.query(insert, newData, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
}

orm.updateOne = function (setCol, idCol, changeData, identifier) {
  var update = `UPDATE burgers SET ${setCol} = ? WHERE ${idCol} = ?`;
  connection.query(update, [changeData, identifier], function (err, res) {
    if (err) throw err;
    console.log(res);
  });
}

// module.exports = {

//   selectAll: function () {
//     var query = "SELECT * FROM burgers";
//     connection.query(query, function (err, res) {
//       if (err) throw err;
//       console.log(res);
//     });
//   },

//   insertOne: function (newData) {
//     var insert = "INSERT INTO burgers (burger_name) VALUES (?)";
//     connection.query(insert, newData, function (err, res) {
//       if (err) throw err;
//       console.log(res);
//     });
//   },

//   updateOne: function (setCol, idCol, changeData, identifier) {
//     var update = `UPDATE burgers SET ${setCol} = ? WHERE ${idCol} = ?`;
//     connection.query(update, [changeData, identifier], function (err, res) {
//       if (err) throw err;
//       console.log(res);
//     });
//   }

// }


