//KEYWORD CLASS TO CREATE CLASSES


class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  bark() {
    console.log(`I am a ${this.species} named ${this.name}.`);
  }
}

const dog = new Animal("Buddy", "Dog");
dog.bark(); // Output: I am a Dog named Buddy.





// Exercise 1:
// Create a class Rectangle with a constructor that takes two parameters: 
// width and height. The class should have a method getArea() that returns 
// the area of the rectangle.


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50…
// Esto es off scope no tiene nada que ver con los ejercicios.
 // // REGULAR EXPRESSIONS

// // Exercise: TESTING NUMBERS
// // Write a function called validateNumberInput(input) that takes a single parameter input and 
// // returns true if input contains only numeric characters (0-9), and false otherwise.

// // Function to validate number input
// function validateNumberInput(input) {
//   const pattern = /^[0-9]+$/;
//   return pattern.test(input);
// }

// // Test cases
// const input1 = "12345"; // valid input
// const input2 = "0";     // valid input
// const input3 = "abc";   // invalid input
// const input4 = "123a";  // invalid input

// console.log(validateNumberInput(input1)); // Output: true
// console.log(validateNumberInput(input2)); // Output: true
// console.log(validateNumberInput(input3)); // Output: false
// console.log(validateNumberInput(input4)); // Output: false


// // The validateNumberInput() function takes an input as a parameter and uses a regular 
// // expression /^[0-9]+$/ to test if the input contains only numeric characters. 
// // The ^ symbol denotes the start of the string, [0-9] is a character class that matches 
// // any digit from 0 to 9, + means one or more occurrences, and $ denotes the end of the string. 
// // The test() method of the regular expression is used to check if the input matches the pattern, 
// // and the function returns true if it does, and false otherwise.



// // REGULAR EXPRESSION ONLY TESTING LETTERS INSTEAD OF NUMBERS

// // Function to validate letter input
// function validateLetterInput(input) {
//   const pattern = /^[a-zA-Z]+$/;
//   return pattern.test(input);
// }

// // Test cases
// const input1 = "abc";   // valid input
// const input2 = "XYZ";   // valid input
// const input3 = "123";   // invalid input
// const input4 = "abc1";  // invalid input

// console.log(validateLetterInput(input1)); // Output: true
// console.log(validateLetterInput(input2)); // Output: true
// console.log(validateLetterInput(input3)); // Output: false
// console.log(validateLetterInput(input4)); // Output: false





// // REGULAR EXP UPPER CASE LETTERS
// // Function to validate uppercase letter input
// function validateUppercaseLetterInput(input) {
//   const pattern = /^[A-Z]+$/;
//   return pattern.test(input);
// }

// // Test cases
// const input1 = "ABC";   // valid input
// const input2 = "XYZ";   // valid input
// const input3 = "AbC";   // invalid input
// const input4 = "123";   // invalid input

// console.log(validateUppercaseLetterInput(input1)); // Output: true
// console.log(validateUppercaseLetterInput(input2)); // Output: true
// console.log(validateUppercaseLetterInput(input3)); // Output: false
// console.log(validateUppercaseLetterInput(input4)); // Output: false







// Create a function validateEmail(email) 
// that takes a single parameter email and validates if it is a valid email address using 
// regular expressions. The function should return true if the email is valid and false otherwise.

// Solution:

// function validateEmail(email) {
//   // Regular expression pattern for email validation
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }

// // Test cases
// console.log(validateEmail("example@example.com")); // true
// console.log(validateEmail("example@.com")); // false
// console.log(validateEmail("example@com")); // false
// console.log(validateEmail("example.com")); // false
// console.log(validateEmail("example@website.co.uk")); // true


// /^[^\s@]+@[^\s@]+\.[^\s@]+$/:

// ^: This is the start of the string anchor, which indicates that the pattern must start 
// matching from the beginning of the string.

// [^\s@]+: This is a character class that matches one or more characters that are not whitespace (\s) 
// or at sign (@). The ^ at the beginning of the character class negates it, so it matches any character 
// except whitespace and at sign.

// @: This matches the at sign (@) character.

// [^\s@]+: This is another character class that matches one or more characters that are not whitespace 
// or at sign, similar to the previous one.

// \.: This matches a period (.) character. The backslash \ is used to escape the period, as it has a special
// meaning in regular expressions.

// [^\s@]+: This is the third occurrence of the character class that matches one or more characters that are 
// not whitespace or at sign.

// $: This is the end of the string anchor, which indicates that the pattern must end matching at the end of 
// the string.

// In summary, this regular expression is used for validating email addresses and it ensures that the email 
// address has a non-whitespace character before and after the at sign, and a period after the at sign 
// followed by one or more non-whitespace characters.