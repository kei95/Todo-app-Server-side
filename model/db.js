'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo_list_react'
})

connection.connect(function(err){
    if(err) throw err;
});

connection.on('error', function(err) {
    console.log("[mysql error]",err);
  });

module.exports = connection;