// The every() method checks if all the elements in an array pass a test; the test is passed to the method as a function. The method returns true if all the elements pass the test, and false if otherwise.

// La función devuelve false inmediatamente después de encontrar el primer elemento que falla en la condición.// El método every se utiliza aquí para comprobar si todos los elementos de la matriz cumplen con la condición de la función isPositive.

function isPositive(element) {
  return element >= 0;
}

let arr = [1, 4, 82, 45, 6]
console.log(arr.every(isPositive)); 
// También se puede usar con funciones lambda. Aquí, cada elemento se comprueba si es mayor que 10.

let arr1 = [11, 12, 13, 14, 15]
console.log(arr.every(element => element > 10)); 
// En este ejemplo, observe cómo la función regresa después de encontrar el primer valor que falla en la condición (cat no es un canino). El resto de la matriz no se examina.

function isCanine(element, index, arr) {
  console.log("Checking if " + arr[index] + " is a canine.")
  return (element == "dog" || element == "doggo")
}

let arr2 = ["dog", "cat", "doggo"]
console.log(arr.every(isCanine)); 

// ________________________________________

function checkYear (year){
    if (year> 2000) {
        console.log ("Estas en el siglo XXI")
    }
    else{
        console.log ("vives en la edad media");
    }
}
checkYear (1985); //Vives en la edad media
checkYear(2022); // vives en el siglo 21

// _____________________________
//ternary operator:

function checkYear1 (){
  const year=document.getElementById("yearInput").value ;
  const message=year>2000 ? "Estas en el siglo XXI": "vives en la edad media";
    
  document.getElementById("output").textContent=message;
    }

// -------------------

const calculator = (num1, num2, operator) =>{
    const result = operator=== "+" ? num1 + num2 :  operator=== "-" ? num1 - num2 :  operator=== "*" ? num1 * num2 :  operator=== "/" ? num1 / num2 : "ivalid operation";
return result;
 };

 console.log (calculator (5,7,"+")); //output :12
 console.log (calculator (10,3,"-")); //output :7
 console.log (calculator (4,6,"*")); //output :24
 console.log (calculator (10,2,"+")); //output :5
 console.log (calculator (5,a,"+")); //output :invalid operator


//  _______________


function calculator1  () {
    const  num1 = Number (document.getElementById("num1").value) ;
    const num2 = Number (document.getElementById("num2").value) ;
   const operator= document.getElementById("operacion").value ;
     const resultado =   
     operator=== "+" ? Number (num1) + Number(num2) :
      operator === "-" ? num1 - num2 : 
      operator === "*" ? num1 * num2 : 
      operator === "/" ? num1 / num2 : 
      "ivalid operation";

document.getElementById("resultado").textContent= resultado;
}
//  };
//  const output = document.getElementById("num1").value ;

//for each va interando entre cada numero
const numbers =[10,11,12,15,20];
numbers.forEach((num) => {
  if(num % 2 === 0){
    console.log(num);
  }
});

const word =["wow", "hey", "bye"];
const hasWordStartingWithH =word.some((word)=>{
  return word.startsWith ("h");
});
console.log(hasWordStartingWithH);//hey
 



function checkWords() {
  const wordsInput = document.getElementById("words-input");
  const words = wordsInput.value.split(",").map((word) => word.trim());
  const result = document.getElementById("result");
  const hasWordStartingWithH = words.some((word) => {
    return word.startsWith("h");
  });
  result.textContent = hasWordStartingWithH ? "At least one word starts with 'h'" : "No word starts with 'h'";
}


const words =["hola", "hey", "hello"];
const allWordStartingWithH =word.every((word)=>{
  return word.startsWith ("h");
});
console.log(hasWordStartingWithH);//true


const number1 = "123";
const paddedNumber= number1.padStart(5,"0");
console.log(paddedNumber); //00123
 

const number2 = "123";
const paddedNumber1= number1.padStart(5,"45");
console.log(paddedNumber1); //45123

const text = "Hola";
const paddedText =text.padEnd(8, "!");
console.log (paddedText);// "Hola!!!"


const text1 = "   Hello";
const trimmedstart = text1.trimStart();
console.log(trimmedstart);//"Hello"


const text2 = "Hello    ";
const trimmedend = text1.trimEnd();
console.log(trimmedend);"Hello"


let rojo = ["blue", ["red","yellow"],"green"];
let flattend =rojo.flat();
console.log(flattend) // ["blue","red","yellow","green"]


let rojo1 = ["blue", ["red",["1","2"],"yellow"],"green"];
let flattend1 =rojo1.flat(2);
console.log(flattend1) // ["blue","red","1","2","yellow","green"]

let rojo4 = ["blue", ["red",["1"["r"["6"],"d"],"2"],"yellow"],"green"];
let flattend4 =rojo1.flat(2);
console.log(flattend4) // ["blue","red","1" ,"r","6","d","2","yellow","green"]

// __________________

let num = 5;
let result = num % 2 === 0 ? "even": "odd";
console.log (result); //odd

let word1  = (" ");
let result1 = word1  !==  " " ? "defined": "undefined";
console.log (result1); //

let numpos  = -7;
let result2 = numpos > 0  ? "positive": numpos < 0 ? "negative": "zero";
console.log (result2); // negative 


let isDivisible   = 6;
let result3 = isDivisible  % 2 === 0 && isDivisible  % 3=== 0 ? "divisible": "not divisible";
console.log (result3); //divisible


