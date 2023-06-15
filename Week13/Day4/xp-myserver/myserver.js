var http = require('http');


// create a server and send a html response

const server = http.createServer((request, response) => {
    // console.log(request);
    response.setHeader('Content-Type', 'text/html');

     response.write('<h1>This is my first response</h1>');
     response.write('<h1>This is my second response</h2>');
     response.write('<p>This is my third response</p>');

    //response.end('<h3>my first response</h3><p>my first response</p>');
})
server.listen(3000);


// Advanced Solution

myserver.js

var http = require('http'); 
var fs = require('fs');
var html = fs.readFileSync('text.html', 'UTF-8');

function send404Response(response){
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('Error 404 : Page not found!')
    response.end();
}

function onRequest (request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('./text.html').pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(3000);
console.log('Server is now running on port 3000');
