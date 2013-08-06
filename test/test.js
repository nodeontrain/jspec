var jspec = require('../lib/jspec');

it("Home page should have the content 'Welcome'", function(done) {
	jspec.visit("/", function(content) {
		content.have_content("Welcome");
		done();
	})
})

it("Two object are equal", function() {
	var obj1 = {user: "thanh", pass: "123456"};
	var obj2 = {user: "thanh", pass: "123456"};
	jspec.object_equals(obj1, obj2);
})
