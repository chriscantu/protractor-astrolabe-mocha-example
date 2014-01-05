var Page = require('astrolabe').Page;

module.exports = Page.create({
	url: { value: 'http://localhost:9000' },
	title : { value: 'Home Page' },
	headingTitle: {
		get: function() { return this.findElement(this.by.css('h3.title')) }
	}
});