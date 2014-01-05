var Page = require('astrolabe').Page;

module.exports = Page.create({
	url: { value: 'http://beta.epikvote.com' },
	title : { value: 'Home Page' },
	headingTitle: {
		get: function() { return this.findElement(this.by.css('h3.title')) }
	}
});