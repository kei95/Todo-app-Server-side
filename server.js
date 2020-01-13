var express = require('express'),
app = express(), 
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var routes = require('./routes/appRoutes');
routes(app)