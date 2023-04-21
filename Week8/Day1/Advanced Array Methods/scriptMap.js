let almuerzos = [
    {principal: "pasta" , postre: "helado"},
    {principal: "tacos" , postre: "galletas"},
    {principal: "pizza" , postre: "flan"},
    {principal: "sushi" , postre: "pay de limón"},
]

// let platosPrincipales= [];
// for ( let i=0 ; i < almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal);
// }
// console.log (platosPrincipales);

//USING MAP METHOD
//  let platosPrincipales= almuerzos.map(function (almuerzo){
//     console.log(almuerzo);
//  })

 //MAP METHOD RETURN
 let platosPrincipales= almuerzos.map(function (almuerzo){
    return almuerzo.principal;
 })

 //console.logging the original array
 console.log (almuerzos)

 //EXCERCISE 1:
// Escribe una función que tome un array de numeros y regrese un array de números multiplicados por dos.

function doubleNumbers (arr){
    return arr.map(num => num *2);
    }
    console.log(doubleNumbers([1,2,3,4,5])); // me regresa [2,4,6,8,10]

//EXERCISES 2 
// Escribe una función que tome un array de palabras y que me las regrese en mayusculas
function capitalizeString(arr){
    return arr.map(str => str.toUpperCase());

}
console.log (capitalizeString(["hello", "world"])); //resultado ['HELLO' ,'WORLD']

//EXERCISES 3 
// ESCRIBE UNA FUNCION QYE TOME UN ARRAY DE OBJETOS Y REGRESE UN NUEVO ARRAY QUE SOLE ME DE EL NOMBRE USANDO MAP

function getNames(arr1){
    return arr1.map(obj = obj.name);
}
console.log (getNames([{name: 'Jhon', latname : 'Doe'},{name: 'Yemy', latname : 'Doe'} ,{name: 'Alex', latname : 'Doe'}, {name: 'Asaf', latname : 'Doe'}]))

//EXERCISES 4

// Escribe una funcion que tome un array de números y me regrese un array de números con todos los impares multiplicados por tres y los pares que se queden iguales.

function ex3(arr2){
    return ex3.map(num => num % 2 !== 0 ? num *3 :num);
}
console.log (ex3([1,2,3,4,5])); // me regresa [3,2,9,4,15]

//EXERCISES 5
// HAZ UNA ARRAY CON UNA SERIE DE STRINGS Y Q ME LOS REFRESE CONCATENADOS PARA QUE ME DE UN ENUNCIADO
function arrayToString(arr3){
    return arr3.map(str=> str.trim).join(' ');// el trim es para queitar espacios si los tuviera dentro de cada palabra que aqui no los hay y por eso es mejor usar el de abajo.
return arr3.map(str=> str).join(' ');}

const input4= ['Hello', 'world','!', 'How', 'are', 'you', 'doing', 'today','?'];
const output = arrayToString (input4);
console.log (output); //me regresa [Hello world! how are you doing today ?]

