//Array.includes() is just like a lot of other methods used in JavaScript (e.g. String.includes()). Array.includes() checks for a specific element’s presence in an array.
// El método devuelve verdadero o falso, dependiendo del resultado. Esto demuestra que es un método booleano.

// Este ejemplo, hecho sin usar el parámetro "start", busca un número en una matriz. Es el mismo ejemplo utilizado en la ilustración anterior.

var myarray = [1, 3, 5, 2, 4];
var check = myarray.includes(2);
console.log(check);


// Ejemplo 2:

// Este ejemplo utiliza el parámetro de inicio y muestra cómo se omete el elemento si el parámetro está sobreestimado.

var myarray = [1, 3, 5, 2, 4];
var check = myarray.includes(3,2); 
if (check==true)
console.log("Found");
else 
{
  console.log("Not found"); 
}
// El código anterior busca 3, comenzando la búsqueda desde el índice 2. El resultado de la búsqueda mostrará "No encontrado", ya que 3 se coloca en el índice 1. Intente cambiar el índice a 1, o 0, y lo encontrará correctamente.