
// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);


// The output will be:
// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// Explanation: The spread operator (...) is used to combine arrays. In this code, a new array is 
// created by spreading vegetables and fruits into it, along with the additional elements "bread" 
// and "chicken". The resulting array contains all these elements in the order they were added.

// The output will be:
// ["U", "S", "A"]
// Explanation: The spread operator is used to spread the characters of the string "USA" into a new array, 
// creating an array of individual characters.

// Bonus:
// The output will be:
// [undefined, undefined]
// Explanation: The array [,,] creates an array with two empty slots. The spread operator spreads these 
// two empty slots into a new array, resulting in an array with two undefined elements.



// In JavaScript, the three dots are called the "spread syntax", and they allow an iterable, 
// like an array or a string, to be expanded into individual elements. When used in an array, 
// the spread syntax expands the array elements into a new array.



// // Exercise 2 : Employees
// // Instructions
// // Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// // Using the map() method, push into a new array the firstname of the user and a welcome message. 
// // You should get an array that looks like this :

// // const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// // 2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// // 3. Bonus : Chain the filter method with a map method, to return an array containing only the 
// // lastName of the Full Stack Residents.



// // Solution:

// // Using map() method to create a new array with welcome messages:


const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents); // ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]



// // Using filter() method to create a new array with only Full Stack Residents:


const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents); // [{firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident"}, {firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident"}, {firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident"}]


// // Using chain filter() method with map() method to create a new array with only the 
// // lastName of the Full Stack Residents:

const fullStackResidentsLastNames = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log(fullStackResidentsLastNames); // ["Bouley", "Alnaji", "Hajek"]






// // Exercise 3 : Star Wars
// // Instructions
// // Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // Use the reduce() method to combine all of these into a single string.


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(combinedString); // "a long time ago in a galaxy far far away"


// // Explanation:

// // In this solution, we used the reduce() method to combine all the elements in the epic array into a 
// // single string.

// // The reduce() method takes two parameters, a callback function and an initial value for the accumulator.

// // The callback function takes two parameters, the accumulator (which is initially set to the provided 
// // initial value) and the current value being processed in the array.

// // In our solution, the callback function concatenates each element of the array to the accumulator with a 
// // space in between, resulting in a single string.


// // the accumulator is adding the current value as strings instead of numbers because the initial value of 
// // the accumulator is set as an empty string (''), and the function is concatenating the current value with 
// // the accumulator using the '+' operator, which concatenates two strings into a single string. Therefore, 
// // as the function iterates over each element in the array, it concatenates each element as a string with the 
// // existing string in the accumulator. If the initial value of the accumulator had been set to a number, 
// // and the '+' operator used to concatenate the current value, then the function would have added the numbers 
// // instead of concatenating them as strings.





// Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and 
// course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you 
// passed the course in Robotics” ect…)


const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// // Filter students that passed the course
const passedStudents = students.filter(student => student.isPassed);

// Congratulate the students that passed using forEach
passedStudents.forEach(student => 
console.log(`Good job ${student.name}, you passed the course in ${student.course}`));

// Hacer ejercicio HTML

// Explanation:

// We start by defining an array of student objects.
// We use the filter() method to create a new array, containing only the students that passed the course. 
// The filter method takes a callback function as an argument which returns a boolean value. 
// The filter method returns an array containing only the elements for which the callback function returned 
// true. In this case, we filter out the students whose isPassed property is false.
// We chain the filter() method with the forEach() method to loop through the passed students and congratulate 
// them. The forEach method takes a callback function as an argument which is executed for each element in 
// the array. In this case, we log a congratulatory message to the console for each passed student.
