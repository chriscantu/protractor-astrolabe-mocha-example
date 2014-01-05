var homePage = require('../pages/homePage'),
	chai = require('chai'),
	promise = require('chai-as-promised');

chai.use(promise);
var expect = chai.expect;

describe('Home Page', function () {
	it('Display home page', function () {
		homePage.go();
		expect(browser.getTitle()).to.eventually.equal(homePage.title);

		homePage.headingTitle.then( function (title) {
			expect(title.getText()).to.eventually.equal('Determine the Epik President');
		});
	});
});