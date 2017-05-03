var mysql = require('mysql'); 
const importer  = require('anytv-node-importer');

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