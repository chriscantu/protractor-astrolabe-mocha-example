var loginPage = require('../pages/loginPage'),
	homePage = require('../pages/homePage'),
	chai = require('chai'),
	promise = require('chai-as-promised');

chai.use(promise);
var expect = chai.expect;

describe('Login Page', function () {
	it('Display Login page', function () {
		homePage.go();
		expect(browser.getTitle()).to.eventually.equal(homePage.title);
	});

	it('Login', function() {
		homePage.loginButton.click();
		expect(browser.getTitle()).to.eventually.equal(loginPage.title);
		
		loginPage.login('chris', 'qwerty');
		expect(browser.getTitle()).to.eventually.equal(homePage.title);
	});
}); 