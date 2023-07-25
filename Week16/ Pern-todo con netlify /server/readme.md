// CREATE SERVER: index.js

npm init -y
npm i express pg cors
npm install --save-dev nodemon

touch index.js


// package.json (change)

  "scripts": {
    "start": "nodemon index.js"
  },


  // CREATE DATABASE: database.sql



  // OPEN TERMINAL 
  psql -U postgres

(hotkey: option + ?) = \
gives you a list of all databases inside terminal

control + c (get out of databases inside terminal)

\c <database_name> (SWITCHES DATABASES)

\c bootcamp  (connect to database bootcamp)

I AM USING \c jwtauth

\dt (you can look at all data tables created in that db)


Entering \q will quit the current database session and return you to the main directory or command prompt. From there, you can execute other commands or navigate to a different directory if needed.

Inside directory: (add the following)
jwtauth=# CREATE DATABASE perntodo;

NOW GO DIRECTLY TO THE DATABASE JUST CREATED:
\c perntodo



Afterwards, copy and paste inside perntodo: 

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);



Not necessary right now:
(SELECT * FROM todo) and you can check whats inside


// CONNECT POSTGRES DATABASE AND SERVER

Create file db.js
(configure how we are going to connect to our database)



// CREATE RESTFUL API INSIDE INDEX.JS (YOU CAN CHECK WITH POSTMAN OR REST CLIENT)


// CREATE CLIENT SIDE (REACT PROJECT)

OPEN A NEW TERMINAL GO TO PERN-TODO DIRECTORY AND TYPE:

cd pern-todo

npx create-react-app client 

cd client

//add npm install --save-dev @babel/plugin-proposal-private-property-in-object

//add bootstrap (index.html) -- link and modal





// CHECK DATA WITH TERMINAL ONCE ITS SENT

psql -U postgres

\c perntodo

SELECT * FROM todo;