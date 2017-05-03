'use strict';

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

module.exports = (router) => {

  const __ = importer.dirloadSync(__dirname + '/../controllers');

  router.del = router.delete;

  router.all('*', (req, res) => {
    res.status(404)
      .send({message: 'Nothing to do here.'});
  });

  return router;
} 

