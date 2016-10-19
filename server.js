var express = require('express');

var app = express();

app.get('/', function(req, res) {

res.send("Hello World From Server.js");


});

app.listen(3000);

console.log("Sever Running on 3000");