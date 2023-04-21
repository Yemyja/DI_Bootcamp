//EJERCISOS SIN REDUCE 
let almuerzos = [
    {principal: "pasta" , postre: "helado"},
    {principal: "tacos" , postre: "galletas"},
    {principal: "pizza" , postre: "flan"},
    {principal: "sushi" , postre: "pay de limón"},
    {principal: "pasta" , postre: "churros"},
    {principal: "pasta" , postre: "browni"},
]
    
    let cantidadDePasta = 0;
    for ( let i= 0; i < almuerzos.length; i++){
        if (almuerzos[i].principal=== "pasta"){
            cantidadDePasta++;
        }   
     }
     console.log(cantidadDePasta);

     //USANDO REDUCE 

    //  let cantidadDePasta = almuerzos.reduce (function(contador, almuerzos){
    //     if (almuerzos.principal === "pasta"){
    //         return contador +1;
    //     }else{
    //         return contador;
    //     }
    //  }, 0)
    //  console.log(cantidadDePasta);

     // lo que ghace REDUCE ES reduce al array a un único valor

     // EXERCISES 1
     //escribe una funcion que use reduce para regrersar la suma de todos los numeros del array

    //  function sumArray(arr){
    //     return arr.reduce((acc, num)=> acc + num, 0);
    //  }
    //  // test the function
    //  console.log (sumArray([1,2,3,4,5]));//resultado 15
    //  console.log (sumArray([-1,0,1])); //resultado 0
    //  console.log (sumArray([10])) // resultado 10

          // EXERCISES 2
     //escribe una funcion que use reduce para regrersar la multiplicacion de todos los numeros del array

     function sumArray(arr1){
        return arr1.reduce((acc, num)=> acc * num, 1);
     }
     // test the function
     console.log (sumArray([1,2,3,4,5]));//resultado 15
     console.log (sumArray([-1,2,-3])); //resultado 6
     console.log (sumArray([0,10,20])) // resultado 0

     //Exercise:
     // Given an array of objects representing books, write a function that returns an array of authors who
     // have written books that were published after the year 2000 and have sold more than 10,000 copies.
     const books = [
       {
         title: "The Alchemist",
         author: "Paulo Coelho",
         year: 1988,
         copiesSold: 65000000
       },
       {
         title: "The Hunger Games",
         author: "Suzanne Collins",
         year: 2008,
         copiesSold: 35000000
       },
       {
         title: "Harry Potter and the Philosopher's Stone",
         author: "J.K. Rowling",
         year: 1997,
         copiesSold: 120000000
       },
       {
         title: "The Da Vinci Code",
         author: "Dan Brown",
         year: 2003,
         copiesSold: 80000000
       },
       {
         title: "The Girl with the Dragon Tattoo",
         author: "Stieg Larsson",
         year: 2005,
         copiesSold: 30000000
       }
     ];
     
function popularAuthors (books){
    return books
    .filter(book => book.year > 2000 && book.copiesSold > 10000)
    .map(book => book.author)
}
console.log (popularAuthors(books))

// otra manera de hacer lo mismo 
let authorsPublished = books
        .filter(function (book) {
          return book.year >= 2000 && book.copiesSold >= 10000;
        })
        .map(function (book) {
          return book.author;
        });
      console.log(authorsPublished);
   

      
