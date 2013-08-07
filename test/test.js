var jspec = require('../lib/jspec');

it("Home page should have the content 'Welcome'", function(done) {
	jspec.visit("/", function(content) {
		content.have_content("Welcome");
		done();
	})
})

it("Two object are equal", function() {
	var obj1 = {user: "thanh", pass: "123456"};
	var obj2 = {pass: "123456", user: "thanh"};
	jspec.object_equals(obj1, obj2);
})

it("Post data", function(done) {
	var obj1 = {user: "thanh", pass: "[!@3456"};
	var obj2 = {pass: "[!@3456", user: "thanh"};
	jspec.post("/post", obj1, function(content) {
		jspec.object_equals(obj1, obj2);
		done();
	})
})
