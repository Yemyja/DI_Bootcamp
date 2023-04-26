let familia = {
    papa: "David",
    mamá: "Yemy",
    hija1:"Yael",
    hijo1: "Daniel",
    hijo2: "elias",
    hijo3:"Gabriel",
    hija2:"Lulú",
    abuelita:"Lulú",
    abuelito:"Elias",
    tia:"sofy",
    tio:"abud",
    prima:"Lillian",
    primo:"Alberto",
}
let keys= Object.keys(familia);// object siempre se escribe con mayuscula
console.log(keys);//aqui me va a dar familiar de todos

let vals= Object.values(familia);
console.log(vals);//aqui me va a dar nombre de todos

let entries= Object.entries(familia);
console.log(entries); //aqui me va a dar familiar y nombre de todos

console.log (entries [2][1]);//aqui me da a dar hija1,Yael
console.log (Object.entries(familia)) //aqui me va a dar familiar y nombre de todos


//destructoring arrays creates new variable insted of doing this:

// const arr = ["red","blue","green"]
// const lava = arr[0];
// const sky= arr [1];
// const tree= arr[2];

//DO THIS 

 const arr = ["red","blue","green"];
 const[lava,sky,tree]= arr
console.log(lava); // resultado red
console.log(sky); // resultado blue
console.log(tree); //resultado verde

// o consologea todos al mismo tiempo
console.log(arr)

console.log (`lava: ${lava}, sky: ${sky}, tree: ${tree}`);


// otro ejemplo
const obj = {
    apple:"red",
    banana: "yellow",
    grape: "purple"
}
    // const apple= obj.apple;
    // const banana= obj.banana;
    // const grape= obj.grape;

//usar esto en vez que es lo mejor
// const{apple,banana,grape}= obj

// usando los ...rest se puede pero no es recomendable depende que estemos haciendo

const {apple, ...rest}= obj
console.log(obj);


// otro ejercicio

const person= {
    nombre: "John Doe",
    age:25,
    gender: "male"
}
let{nombre,age,gender="female"}= person  // no puedo volver a declar al valor de gender abajo si ya lo defini arriba, va a seguir agarrando el primero.

console.log (`I am ${nombre} and i am ${age} years old.`); // i am john and i am 23 years old.

console.log (person) // {nombre:'John Doe', age:25, gender:'male'}
// anñadiendo variables desconstruyendo variales

// alternativa
function printDetails(person){
    person.nombre, person.age}

    //or

    function printDetails({name,age}){
        console.log (`The name is ${nombre} and ${age} years old.`);
    }
    printDetails(person);

    //Array destructuring javasccript

    // let numeros = [1,2,3,4,5];
    // let [one, two, three]= numbers;

    // console.log (one);
    // console.log (two);
    // console.log (three);

    // array destructuring usando  function

    // let numeros = [1,2];
    // let[one,two,three=90]= numeros;

    // console.log (one);
    // console.log (two);
    // console.log (three);


    // function bottle(){
    //     return["bottle", "water"]
    // }
    // let[red,blue]= bottle();
    // console.log (red);
    // console.log(blue);

    // //Classes
    // // creamos clase con los metodos "drive" y "brake"
    // class car {
    //     drive(){
    //         console.log("You are driving your car!");
    //     }
    //     brake(){
    //         console.log("You step n de brakes!");
    //     }
    // }
    // // creamos car object que pueden drive and brake

    // let car1 = new car ();
    // let car2= new car ();
    // // inocamos al car object con su metodo
    // car2.brake();

    // //or

    // car2.brake();


    class Car {
        constructor(maker, model, year, color) {
          this.maker = maker;
          this.model = model;
          this.year = year;
          this.color = color;
        }
      
        drive(){
          console.log("You drive the car!");
        }
        brake() {
          console.log("You step on the brakes!");
        }
      }
      
      let car1 = new Car("Ford", "Mustang", 2022, "red");
      let car2 = new Car("Chevy", "Corvette", 2021, "blue");
      
      
      console.log(car1.maker);
      console.log(car1.model);
      console.log(car1.year);
      console.log(car1.color);
      
      // // OR Console.log all at once
      
      console.log(`make: ${car1.maker}, model: ${car1.model}, year: ${car1.year}, color: ${car1.color}`);
      car1.brake();


      // class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// let person1 = new Person("John", 30);
// person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."


// SOLUTION

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      const { name, age } = this; // Destructuring the object
      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
  }
  
  let person1 = new Person("John", 30);
  person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."


  // // INHERITANCE EXERCISE WITH SUPER
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      const { name } = this; // destructuring to access properties
      console.log(`${name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // setting the property directly without calling superclass constructor
      this.breed = breed;
    }
  }
  
  let dog1 = new Dog("Buddy", "Labrador");
  dog1.speak(); // Output: "Buddy make a sound."
  
  let dog2 = new Animal("Larry")
  dog2.speak(); //Larry make a sound