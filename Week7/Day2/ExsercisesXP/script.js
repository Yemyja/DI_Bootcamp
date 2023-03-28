// Exercise 1 : Scope

// Instructions

// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console: creo q va a salir 3
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? No va a cambiar porque const no cambia.

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()// 0
// funcTwo() //5
// funcThree() //0  : pero en realidad el resultado sale 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? en el two no cambiaria porq const no cambia pero en el tree si me lo daria bien. 

// //#3
// function funcFour() {
//     window.a = "hello"; //le estamos llamndo a window para que cree otra variable a 
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`); 
// }

// #3.1 - run in the console:
// funcFour() va a ser hellow adentro del window
// funcFive() // me daria 5 porque el let de arriba ya habia cambiado a 5. pero si no tendriamos la variable entonces el resultado seria hello.

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // me da test poruq es lo de hasta abajo q esta dentro de esa funcion
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a= 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`); // respuest 5 porque creamos una nueva variable al usar let.
// }
// alert(`outside of the if block ${a}`); // la respuesta es 2

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? : dosent change because const cant change.

// // 🌟 Exercise 2 : Ternary Operator

// // Instructions

// // Using the code below:

//  function winBattle(){
//     return true;
// }
// // Transform the winBattle() function to an arrow function.
// const winBattle = () => {
//     return true;
// }

// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// // Console.log the experiencePoints variable.
// const experiencePoints = winBattle () ? 10 : 1 ;
// console.log (experiencePoints);

// // 🌟 Exercise 3 : Is It A String ?

// // Instructions

// // Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// // Check out the example below to see the expected output
// // Example:
// const isString = (value) => typeof value === "string" ? true : false;

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// // 🌟 Exercise 4 : Colors

// // Instructions

// // Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// colors.forEach ((color,index) => {
//     console.log ( ` ${index + 1 } # choice is ${color}.`)
// });
 
// // Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

// if (colors.includes ("Violet")){
//     console.log ("Yeah");
// } else{console.log ("No.....")

// }
// // Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// // 🌟 Exercise 5 : Colors #2

// // Instructions

// // Using these arrays :

// const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class and ternary operator.
// colors.forEach ((color,index) => {
//    const suffix = (index < 3 )? ordinal [index+1] : ordinal [0];
   
//     console.log ( ` ${index + 1 }${suffix } # choice is ${color}.`)
// });
 

// const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal2 = ["st","nd","rd","th"];
// // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class and ternary operator.
// colors2.forEach ((color2,index) => {
// const suffix1 = (index < 3 )? ordinal2 [index] : ordinal2 [3];
   
// console.log ( ` ${index + 1 }${suffix1 } # choice is ${color2}.`)
    
// });
 

// Exercise 6 : Bank Details

// Instructions

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

const vatRate = 0.17;
  const details = ["+200", "-100", "+146", "+167", "-2900"]

const currentBankAccount = addVat(details);
console.log("currentBankAccount:", currentBankAccount);




function addVat(details) {
  let total = 0;
  details.forEach((detail) => {
    const numExpense = Number(detail);
    const expensewithVat = numExpense * (1 + vatRate);
    total += expensewithVat
  });
  return total;
}
  

//otra forma de hacer la  funcion  mas reducida para lograrlo

function addVat (details){
    const VAT_RATE = 0.17;
    return details.reduce ((total,current) => (total += Number(current) * (1 + VAT_RATE)), 0);
}
