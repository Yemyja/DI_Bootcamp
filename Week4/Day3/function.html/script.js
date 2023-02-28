// 1. Crear un archivo HTML estructurado vinculado a un archivo JS

// 2. Escribe una función Javascript que tome un parámetro: myAge

// 3. En la función, consola.log la edad de mi madre y mi padre. Mi madre tiene el doble de mi edad, y mi padre tiene 1,2 años que mi madre.

// 4. Llama a la función.

function myAge (me, mom, dad){
me=41;
mom= (me * 2);
dad= (mom * 1.2);
console.log(mom)
console.log(dad)


} myAge()

// Crear un archivo HTML estructurado vinculado a un archivo JS

// 2. Escribe una función Javascript que tome un parámetro: myAge

// 3. En la función, devuelve la edad de mi madre (mi madre tiene el doble de mi edad)

// 4. Llama a la función

// 5. En el ámbito global, console.log el resultado de la función

function getmomage(myAge1){
  return  myAge1 * 2 ;
    
}
 const myAge1=41;

const mom = getmomage(myAge1);
 
console.log ( `my mom is ${mom}`);


