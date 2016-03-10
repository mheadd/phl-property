var property = require('../index');

var address = process.argv[2] || '1234 Market Street';

property.getStandardizedAddress(address, function(error, response) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log(error);
	}
});