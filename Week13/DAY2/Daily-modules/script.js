// EXERCISES 1 
//import {largeNumber} from "./main.js";

// const b = 5;

// console.log (largeNumber + b);

//exercises 2

//part1:
// const http = require("http");

// const server = http.createServer();
// const port = 3000;
// const host= "localhost";

// function sayHello(){
//     console.log("Server is listening on port", port)
// }
// server.listen(port,host,sayHello);


// otra manera de hacerlo reducido es asi:
// server.listen(port,host,function(){
//     console.log("server is listening on port",port);
// });

// part 2
// const http = require("http");
// const { largeNumber } = require("./main.js");
// const server = http.createServer(handleResponse);
// const port = 3000;
// const host = "localhost";

// function handleResponse(req, res) {
//     res.setHeader('Content-Type', 'text/html')    
//     res.writeHead(201);                           
//     res.end(`
//     <h1>Response from Server</h1>
//     <p>The large number is ${largeNumber}</p>
//     `);                  
// }

// server.listen(port, host, function () {
// console.log("Server is running on port", port);
// });


//Part 3

const http = require("http");
const {largeNumber, getCurrentDate } = require("./main.js");
const server = http.createServer(handleRequest);
const port = 8080;
const host= "localhost";

server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

function handleRequest(req,res){
    res.setHeader('Content_Type' ,'text/html')
    res.writeHeader(201);
    res.end(`

    <p>The date and the time are: ${getCurrentDate()}</p>`);
}
