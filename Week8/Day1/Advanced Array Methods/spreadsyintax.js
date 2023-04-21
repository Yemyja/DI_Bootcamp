// SPREAD SYNTAX

// EJERCICIO PARA UNIR LOS ARRAYS
// crea dos arrays con numeros dentro y crea un tercer array con todos los numeros

const arr1= [1,2,3];
const arr2 =[ 4,5,6,7];
const arr3 = [...arr1, ...arr2];
console.log(arr3); //output [1,2,3,4,5,6,7]