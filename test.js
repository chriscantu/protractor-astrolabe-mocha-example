var chai = require('chai'),
	promise = require('chai-as-promised');

chai.use(promise);
var expect = chai.expect;

describe('Library', function () {
	it('should expose the correct global variables', function () {
		expect(protractor).to.exist;
		expect(browser).to.exist;
	});

	it('Should display home page', function () {
		browser.get('http://beta.epikvote.com');
		expect(browser.getTitle()).to.eventually.equal('Home Page');
	})
});