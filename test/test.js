var jspec = require('../lib/jspec');

describe("Home page", function() {
	it("should have the content 'Welcome'", function(done) {
		jspec.visit("/", function(content) {
			jspec.have_content(content, "Welcome");
			done();
		})
	})
})
