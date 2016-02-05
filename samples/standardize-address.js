var property = require('../index');

property.getStandardizedAddress('1234 market', function(error, response) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log(error.message)
	}
});