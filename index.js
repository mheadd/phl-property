var request = require('request');

// URL to City of Philadelphia address and property APIs.
var address_url = 'https://api.phila.gov/ais/v1/addresses/';

exports.getPropertyInfo = function(address, callback) {
	var url = address_url + encodeURIComponent(address);
	request(url, function(err, resp, body) {
		var error = resp.statusCode != 200 ? new Error('Unable to retrieve address info.') : err;
		if(!error) {
			callback(null, JSON.parse(body));
		}
		else {
			callback({ message: error.message });
		}
	});

};