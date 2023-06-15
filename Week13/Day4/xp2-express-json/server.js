// const http = require('http');
// var express = require("express");
// var cors = require('cors');
// var app = express();

// app.use(cors());

// app.get("/", (req, res) => {
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }

//     res.send(user);
//     console.log(user);
//    });


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// //Run on Port http://localhost:3000/
// //Run Terminal node server.js


// Exercise 2 : Express & Parameters
// server.js

const express = require('express');

const app = express();


app.get('/:id', (req , res) => {

    console.log(req.params);

    // if you want to send a message by status of result
    //res.status(200).send('OK')

    res.send(req.params);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

   //Run on Port http://localhost:3000/1234

   //Run Terminal node server.js

   //OUTPUT: {"id":"1234"}


//    Exercise 2 : Express & Parameters
//    server.js
   
   const express = require('express');
   
   const app = express();
   
   
   app.get('/:id', (req , res) => {
   
       console.log(req.params);
   
       // if you want to send a message by status of result
       //res.status(200).send('OK')
   
       res.send(req.params);
   
   });
   
   app.listen(3000, () => {
       console.log("Server running on port 3000");
   });
   
      //Run on Port http://localhost:3000/1234
   
      //Run Terminal node server.js
   
      //OUTPUT: {"id":"1234"}
   
   
   
   
   
   
//    Exercise 3: Express & Static Files
//    server.js
   
   const express = require('express');
   
   const app = express();
   
   app.use(express.static(__dirname + '/public'))
   
   
   app.listen(3000, () => {
   
       console.log("Server running on port 3000");
   
      });
   
      //Run on Port http://localhost:3000
   
      //Run Terminal node server.js
   
   