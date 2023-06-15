// Exercise 2 : Http & Json

var http = require('http');

//create a server:
http.createServer(function (req, res) {

    const user = {
        firstname: 'Jonh',
        lastname: 'Doe'
    }

    var myJSON = JSON.stringify(user);

    res.write(myJSON); //write a response to the client

    res.end(); //end the response

}).listen(8080); //the server object listens on port 8080

//Run Terminal node server.js



// Other Solution

server.js

const http = require('http'); 
const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/') { 
        // inform the client that we send JSON response in the header with the appropriate content type.
        res.writeHead(200, 
                      { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(
            { "firtsname":"John", "lastname":"Doe"}));  
        res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(8080);
console.log('Node.js web server at port 8080 is running..')

// Command Prompt :
// cd (path to the file)
// node server.js ('Node.js web server at port 8080 is running..')
// Output : {"firtsname":"John","lastname":"Doe"}




// Exercise 3 : Express
server.js

var express = require("express");

//var cors = require('cors');

var app = express();

//app.use(cors());


app.get("/", (req, res) => {
    res.send('<h1>This is an HTML tag</h1>');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Run on Port http://localhost:3000/
// Run Terminal node expresserver.js



