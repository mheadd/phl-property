var property = require('../index');

property.getPropertyInfo('1234 Market Street', function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log(error.message)
	}
});