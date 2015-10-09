var express = require('express');
var bodyParser = require('body-parser')

var app = express();
console.log(express())


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// ----Routes------


	// console.log(req.body);

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
 
 });