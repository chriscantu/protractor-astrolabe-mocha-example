var Page = require('astrolabe').Page;

module.exports = Page.create({
	url: { value: 'http://beta.epikvote.com/login' },
	title : { value: 'Login' },
	username: {
		get: function() { return this.findElement(this.by.css('input#email')) }
	},
	password: {
		get: function() { return this.findElement(this.by.css('input#password')) }
	},
	btnLogin: {
		get: function() { return this.findElement(this.by.css('button.blue.ng-binding'))}
	},
	submit: {
        value: function() {
            this.btnLogin.click();
        }
    },
    login: {
    	value: function(username, password) {
    		this.username.sendKeys(username);
    		this.password.sendKeys(password);
    		this.submit();
    	}
    }
});