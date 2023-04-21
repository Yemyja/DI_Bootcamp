//FILTER : FILTRA DENTRO DEL ARRAY

let ealmuerzos = [
    {principal: "pasta" , postre: "helado"},
    {principal: "tacos" , postre: "galletas"},
    {principal: "pizza" , postre: "flan"},
    {principal: "sushi" , postre: "pay de limón"},
    {principal: "pasta" , postre: "churros"},
    {principal: "pasta" , postre: "browni"},

]
// let PostreParaPlatosconPasta = [];
// for (let i=0; i< almuerzos.length; i++ ){
//     if (almuerzos[i].principal === "pasta"){
//         PostreParaPlatosconPasta.push (almuerzos[i].postre)
//     }
// }
// console.log (PostreParaPlatosconPasta);

// con filter method

// let PostreParaPlatosconPasta= almuerzos.filter(function(almuerzo){
//     return almuerzo.principal === "pasta";
// })
// console.log(PostreParaPlatosconPasta);

// para solo decir el postre de los que tienen pasta seria asi

let PostreParaPlatosconPasta= ealmuerzos.filter(function(ealmuerzo){
    return ealmuerzo.principal === "pasta"})
    .map(function(ealmuerzo){
        return ealmuerzo.postre;
    });
    console.log(PostreParaPlatosconPasta);

    //exercises2
    // escribe una funcion de numeros que me regrese solo los pares

    function filterEvens (arr){
        return arr.filter(num => num %2 === 0);
    }
    const input1 = [1,2,3,4,5,6,7,8,9,10];
    const output2 = filterEvens(input1);
    console.log(output2); // me regresa [2,4,6,8,10]


// EXERCISES 3
// HAZ UNA FUNCION DE PALABRAS QUE ME REGRRSE SOLO LAS PALABRAS QUE SEAN IGUAL O MAYORES A LA LONGITUD  A LO QUE QUERAMOS

function filterByLength(input, minLength) {
    return input.filter(str => str.length >= minLength);
  }
  const input4 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const minLength = 6;
  const output4 = filterByLength(input4, minLength);
  console.log(output4); // ['banana', 'cherry', 'elderberry']
 
  // Exercise 3:
  // Write a function filterByProperty that takes an array of objects and a property name as input,
  // and uses the filter() method to return a new array that only contains the objects that have a true value
  // for the specified property.
  function filterByProperty(arr, propName) {
    return arr.filter(obj => obj[propName]);
  }
  const input = [
    { name: 'Alice', age: 30, hasChildren: true },
    { name: 'Bob', age: 25, hasChildren: false },
    { name: 'Charlie', age: 40, hasChildren: true },
    { name: 'David', age: 20, hasChildren: false }
  ];
  const propName = 'hasChildren';
  const output = filterByProperty(input, propName);
  console.log(output); // [{ name: 'Alice', age: 30, hasChildren: true }, { name: 'Charlie', age: 40, hasChildren: true }]