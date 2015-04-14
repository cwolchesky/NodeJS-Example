

// Start a web server
var http = require('http');
http.createServer(function (request, response) {
	homeRoute(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');

function homeRoute(request, response) {
	//if url == "/" && GET
	if (request.url === "/") {
		//show search
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.end('Footer\n');
	} else {
		response.writeHead(501);
		response.end();
	}
	//if url == "/" && POST
	  //redirect to /:username
}