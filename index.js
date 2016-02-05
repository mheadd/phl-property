var request = require('request');
var async = require('async');

// URLs to City of Philadelphia address and property APIs.
var address_url = 'https://api.phila.gov/ulrs/v3/addresses/';
var property_url = 'https://data.phila.gov/resource/bz79-67af.json?address_id=';

// Returns JSON array containing details for a specific property.
exports.getPropertyInfo = function(address, callback) {
	async.waterfall([
			async.apply(standardizeAddress, address),
			getAddressDetails
		],
		function generateResponse(error, body) {
			callback(error, JSON.parse(body));
		});
}

// Returns a JSON object with standardized address and location information for a property.
exports.getStandardizedAddress = function(address, callback) {
	standardizeAddress(address, callback); 
}

function standardizeAddress(address, callback) {
	var url = address_url + encodeURIComponent(address) + '?format=json';
	request(url, function(err, resp, body) {
		var error = resp.statusCode != 200 ? new Error('Unable to standardize address') : err;
		callback(error, body);
	});
}

function getAddressDetails(body, callback) {
	var addresses = JSON.parse(body).addresses
	if(addresses.length == 0) {
		callback(new Error('No property information for that address'), null);
	}
	else {
		var url = property_url + encodeURIComponent(addresses[0].standardizedAddress);
		request(url, function(err, resp, body) {
			callback(err, body);
		});
	}
}