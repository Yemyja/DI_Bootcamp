In Node.js, the module object is a special object that represents the current module being executed. 
It provides a way to define and share functionality between different modules using the concepts of 
importing and exporting.

To import functionality from another module using the module object, you can use the require function. 
Here's an example:

Create a module named myModule.js with some functionality that you want to export:

// myModule.js

function sayHello() {
  console.log('Hello!');
}

module.exports = {
  sayHello: sayHello
};


In another module, you can import the functionality from myModule.js using the require function:

// main.js

const myModule = require('./myModule.js');

myModule.sayHello(); // Hello!


In the above example, require('./myModule') imports the exported functionality from myModule.js. 
The returned object from the require function contains the exported members of the module, 
in this case, the sayHello function. You can then use myModule.sayHello() to invoke the exported function.

You can also export multiple functions, objects, or variables from a module by adding them to the 
module.exports object. Here's an example:

// math.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  subtract: subtract
};


And in another module, you can import and use those functions:

// main.js

const math = require('./math.js');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2

This way, you can import specific functions or objects from a module and use them in your code.

Note: Starting from Node.js version 14, you can also use the ES modules syntax (import and export) 
instead of the require function. However, the import and export syntax require additional configuration, 
such as using the .mjs file extension or enabling the "type": "module" field in the package.json file. 


Note: Remember to always add the folder name if exercises are inside folder.

const math = require('./exercise/math.js');

const { largeNumber } = require("./exercise/main.js");






Four Node.js / modules, exercises:

Exercise 1:
Create a module named "mathUtils" that exports a function called "sum" which takes two numbers as 
parameters and returns their sum. Write a Node.js program that uses this module to find the 
sum of two numbers.

Solution:
mathUtils.js:

module.exports.sum = function(a, b) {
  return a + b;
};



main.js:

const mathUtils = require('./mathUtils.js');

const sumResult = mathUtils.sum(5, 7);
console.log(sumResult); // Output: 12

Exercise 2:

Create a module named 'StringUtils' that export a function called 'reversestring' which takes a string as a parameter and returns the reversed string.Writhe a node.js program that uses this module to reverse a given string.

Solution:
stringUtilis.js;

module.exports.reverseString= function(str){
     return str.split(").reverse().join(");};

     main.js
     const stringUtils= required('./stringUtilis');

const reversedString= stringutils.reverseString('Hello, World!');
console.log(reversedString); // output: !dlroW, olleH


Exercise 3:
Create a module named "calculator" that exports multiple functions, 
including "add", "subtract", "multiply", and "divide," which perform the corresponding operations 
on two numbers. Write a Node.js program that uses this module to perform arithmetic calculations.

solution:

calculator.js

module.exports.add = function (a,b){
    return a+b;
};


module.exports.substract = function (a,b){
    return a-b;
}

module.exports.multiply= function (a,b){
    return a*b;};


module.exports.divide= function (a,b){
    return a/b;};


main.js

const calculator = require('.calculator.js');

const additionResult = calculator.add(5,3);
console.log (additionResult);// output:8


const substractionResult = calculator.substract(10,4);
console.log (substractionResult);// output:6


const multiplicationResult = calculator.multiplay(7,2);
console.log (multiplicationResult);// output:14


const divisionResult = calculator.dividet(20,5);
console.log (divisionResult);// output:4


Exercise 4:
Create a module named "randomUtils" that exports a function called "generateRandomNumber" 
which takes a minimum and maximum range as parameters and returns a random number within that range. 
Write a Node.js program that uses this module to generate a random number between 1 and 10.

module.exports.generateRandomNumber = function (min,max){
    return Math.floor (Math.random() * (min- max +1));
};
main.js

const randomUtils = require('./randomUtils.js');

const randomNumber = randomUtils.generateRandomeNumber(1, 10);

console.log (randomNumber); // output a random number between 1 and 10 ( inclusive)



index.html

<html>
<head>
 <title>Exercise 1 <title>
 <script src="main.js" type= "module"> defer</script>
 </head>
 <body>
 <h1>Exercise 1 </h1>
 <p id="result"> </p>
 <body>
 </html>

 main.js

 const mathUtils =require ('./mathUtils.js');

 const sumResult = mathUtils.sum(5,7);
 document.getElementarById('result).textContent = sumResult;


para display en html


stringUtilis.js;

module.exports.reverseString= function(str){
     return str.split(").reverse().join(");};


index.html

<html>
<head>
 <title>Exercise 2 <title>
 <script src="main.js" type= "module"> defer</script>
 </head>
 <body>
 <h1>Exercise 2 </h1>
 <p id="result"> </p>
 <body>
 </html>

 main.js
 const stringUtils =require ('./stringUtils.js');
 const reverseString = stringUtils.reverseString('Hello, World);
 document.getElementarById('result).textContent = reverseSrtring;


con html:

calculator.js

module.exports.add = function (a,b){
    return a+b;
};


module.exports.substract = function (a,b){
    return a-b;
}

module.exports.multiply= function (a,b){
    return a*b;};


module.exports.divide= function (a,b){
    return a/b;};


<html>
<head>
 <title>Exercise 2 <title>
 <script src="main.js" type= "module"> defer</script>
 </head>
 <body>
 <h1>Exercise 3</h1>
 <p id="addition"> </p>
 <p id="substraction"> </p>
 <p id="multiplication"> </p>
 <p id="division"> </p>
 <body>
 </html>


main.js

const calculator = require('.calculator.js');

const additionResult = calculator.add(5,3);
document.getElementById('addition').textContent = `Addition: ${additionResult}`


const substractionResult = calculator.substract(10,4);
document.getElementById('substraction').textContent = `Substraction: ${substractionResult}`



const multiplicationResult = calculator.multiplay(7,2);
document.getElementById('multiplicationn').textContent = `Multiplication:${multiplicationResult}`


const divisionResult = calculator.dividet(20,5);
document.getElementById('division').textContent = `Division: ${divisionResult}`


