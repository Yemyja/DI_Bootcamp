// Exercise 1 : Favorite Color

// Instructions

// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.


let sentences = ["My", "favorite", "color", "is","blue" ];

console.log(sentences);

console.log(sentences.toString());
console.log(sentences.join());
console.log(sentences.join("+"));
console.log(sentences.join(" "));


// Exercise 2 : Mixup

// Instructions

// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

let  str1= "mix";
let str2 = "pod";

//  2. Slice out and swap the first 2 characters of the two strings from part 1. = le dijimos quitale- rebanale(slice) la 3 y deje las primeras 2, 
let str1FirstTwo= str1.slice(0,2);
let str2FirstTwo= str2.slice(0,2);
console.log (str1FirstTwo)
console.log (str2FirstTwo)


// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// let result1 = (str1FirstTwo + "d")
// let result2 = (str2FirstTwo + "x")
// console.log (result1)
// console.log (result2)
// console.log (result2 + " " +result1)


 let changeLet = str1.slice(0,2) + str2.slice(2,3);
 str1 = str2.slice(0,2) + str1.slice(2,3);
 str2 = changeLet;
let newString = (`${str1} ${str2}`);
console.log(newString);
  
//otra forma:
// str1= str1.replace(str1FirstTwo, str2FirstTwo);
// str1= str1.replace(str2FirstTwo, str1FirstTwo);
// console.log (str1)
// console.log (str2)

// 4. Finally console.log the new concatenated string.


// Exercise 3 : Calculator

// Instructions

// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1. 
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1= parseFloat(prompt("Enter the first number: "))
let num2= parseFloat(prompt("Enter the second number: "))
let sum= num1 +num2;

alert("the sum of " + num1 + " and " + num2 + " is "+ sum );



let number1= parseFloat(prompt("Enter the first number: "))
let number2= parseFloat(prompt("Enter the second number: "))
let operation= prompt("Enter the operation ou want to perform: +,-,*,/")

let result;
switch(operation){
    case "+":
        result= number1 + number2;
        break;
        case "+";
            result= number1 - number2;
            break;
            case "*":
                result= number1 * number2;
        break;
        case "/":
            result= number1 / number2;
            break;

            default:
                console.log ("invalid operation");
}
if (result){
    console.log ("Result:" + result);
}
    
    


