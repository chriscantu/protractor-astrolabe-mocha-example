var homePage = require('../pages/homePage'),
	chai = require('chai'),
	promise = require('chai-as-promised');

chai.use(promise);
var expect = chai.expect;

describe('Library', function() {
	it('should expose the correct global variables', function () {
		expect(protractor).to.exist;
		expect(browser).to.exist;
	});
});

describe('Home Page', function () {
	it('Display home page', function () {
		homePage.go();
		expect(browser.getTitle()).to.eventually.equal(homePage.title);
	});
});