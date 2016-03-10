var property = require('../index');

var address = process.argv[2] || '1234 Market Street';

property.getPropertyInfo(address, function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log(JSON.stringify(error));
	}
});