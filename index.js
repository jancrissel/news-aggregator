var express = require('express');
var mysql = require('mysql'); 
var app = express();

var connectDB = mysql.createConnection({
	//properties...
	host: 'localhost',
	user: 'aggregator',
	password: 'aggregator',
	database: 'newsDB'
});

connectDB.connect(function(error){
	if(!!error)
		console.log('ERROR: Could not connect to database.');
	else 
		console.log('CONNECTED!');
});

app.use(express.static('public'));
var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('App is running at port %s', port);
});


