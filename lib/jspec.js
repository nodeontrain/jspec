/*

	This file is a part of jspec project.

	Copyright (C) 2013 Thanh D. Dang <thanhdd.it@gmail.com>

	jspec is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	jspec is distributed in the hope that it will be useful, but
	WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/


var http = require("http");
var assert = require("assert");

if(!String.prototype.have_content) {
	String.prototype.have_content = function (str) {
		return assert.notEqual(-1, this.indexOf(str));
	};
}

exports.visit = function (_path, callback) {
	var options = {
		hostname: 'localhost',
		port: 1337,
		path: _path,
		method: 'GET'
	};
	var req = http.request(options, function(res) {
		res.on('data', function (chunk) {
			var data = "";
			data += chunk;
			callback(data);
		});
	});
	req.on('error', function(e) {
		callback(e);
	});
	req.end();
}

exports.object_equals = function(obj1, obj2) {
	return assert.deepEqual(obj1, obj2);
};
