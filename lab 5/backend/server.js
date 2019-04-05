var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);