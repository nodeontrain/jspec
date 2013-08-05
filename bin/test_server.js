var http = require('http');

http.createServer(function (req, res) {
	if (req.url == "/") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Welcome');
	}
}).listen(1337, '127.0.0.1');
