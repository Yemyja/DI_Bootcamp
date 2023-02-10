// Review About Arrays

// Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
// Write code to replace “James” to “Jason”.
// people[2]="Jason"
people[people.length-1]= "Jason";

// Write code to add your name to the end of the people array.
people.push("Yemy");
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log (people)

// Write code to make a copy of the people array using the slice method.


// The copy should NOT include “Mary” or your name.
const newPeople= (people.slice (1))
console.log(newPeople)
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"))
// Create a variable called last which value is the last element of the array.
const last= people [people.length-1]
console.log (last)
console.log (people)
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.

for (const friend of people){
    console.log ("this person is: ", friend)


// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 

if (friend === "Jason")
break}

// Hint: take a look at the break statement in the lesson.

// Exercise 2 : Your Favorite Colors

// Instructions

// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["blue","yellow", "red", "green", "purple"]
const suffixes= ["st","nd", "rd","th","th"]

for (let i=0; i < colors.length;i++ ){
    console.log (`My #${[i+1]} choise is ${colors[i]}`)
    console.log (`My ${[i+1]}${suffixes [i]} choise is ${colors[i]}`)}


// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus




