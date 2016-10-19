var express = require('express');

var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000);

console.log("Sever Running on 3000");