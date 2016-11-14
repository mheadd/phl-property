var property = require('../index');
var chai = require('chai');
var expect = require('Chai').expect;
var should = chai.should();

describe('phl-property', function() {

	// Tests for getPropertyInfo method.
	describe('Property information', function() {
		it('Should return property information', function(done) {
			property.getPropertyInfo('1234 Market Street', function(error, response) {
				expect(error).to.be.null;
				expect(response.features[0].properties.street_address).to.equal('1234 MARKET ST');
				done();
			});
		});
		it('Should return an error if address is invalid', function(done) {
			property.getPropertyInfo('1234 fake street', function(error, response) {
				expect(error).to.not.be.null;
				expect(error.message).to.equal('Unable to retrieve address info.');
				done();
			});
	  	});
	});


});