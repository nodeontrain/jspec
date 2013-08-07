var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
	if (req.url == "/") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Welcome');
	} else if (req.url == "/post") {
		var postData = "";
		var value = "";
		req.on('data', function(chunk) {
			postData += chunk;
		});
		req.on('end', function() {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(postData);
		});
	}
}).listen(1337, '127.0.0.1');
