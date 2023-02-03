// Instructions

// Store your favorite food into a variable.

const favoriteFood = "Hotcakes";

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

const favoriteMeal = "breakfast";

// Console.log I eat <favorite food> at every <favorite meal>
//string concatenation 
console.log ('I eat ' + favoriteFood + ' at every ' + favoriteMeal )

//Template literal backticks mac shift option]= `
    // console.log(`i eat ${favoriteFood} at every ${breakfast} ` );


//     Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
 const myWatchedSeriesLength = myWatchedSeries.length;
 console.log (myWatchedSeriesLength);
const myWatchedSeriesSentence= myWatchedSeries[0] +"," + myWatchedSeries [1]+ " and " + myWatchedSeries [2] ;
 console.log (myWatchedSeriesSentence );
 
 //Template literal
//  console.log( `My watched Series ${myWatchedSeries[0] }+ ${myWatchedSeries[1]]+  ${myWatchedSeries[2]}`)

 const myWatchSentence = "I watched " + myWatchedSeriesLength + "," + myWatchedSeriesSentence +"."
 const sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;
console.log(myWatchedSeriesSentence)

//  Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries [2] = "friends"
console.log(myWatchedSeries)

// Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("Breacking bad")
console.log(myWatchedSeries)
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Better call Saul")
console.log(myWatchedSeries)
// Delete the series “black mirror”.
delete myWatchedSeries[1];
console.log(myWatchedSeries)
// Console.log the third letter of the series “money heist”.
const moneyHeist = myWatchedSeries[2]
console.log(moneyHeist)

 


// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.




// 🌟 Exercise 3 : The Temperature Converter

// Instructions

// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsius = 20;
const fahrenheit= ((celsius / 5 )* 9 ) +32 ;
console.log (fahrenheit)



//  Exercise 4 : Guess The Answers #1

// Instructions

// For each expression, predict what you think the output will be in a comment (//) without first running the command. 
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual:23


//Exercise 5 : Guess The Answers #2

// Instructions

// For each expression, predict what you think the output will be in a comment (//) without first running the command. 
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

typeof(15)
// Prediction:15
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:nan
// Actual:number

typeof("hello")
// Prediction: string
// Actual:string

typeof(true)
// Prediction: true
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual:boolean

"hamburger" + "s"
// Prediction: nan
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual:hamburger

"1" + "3"
// Prediction: 4
// Actual:13

"1" - "3"
// Prediction: -2
// Actual:-2

"johnny" + 5
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:nan
// Actual:nan

99 * "hello" 
// Prediction:nan
// Actual:nan

1 != 1
// Prediction: boolean
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: true
// Actual: false


//Exercise 6 : Guess The Answers #3

// Instructions

// For each expression, predict what you think the output will be in a comment (//) without first running the command. 
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?

5 + "34"
// Prediction: 534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction:--"  "
// Actual:--"  "

" " + 0
// Prediction:" 0"
// Actual:" 0"

true + true
// Prediction: true
// Actual:2

true + false
// Prediction: 0
// Actual: 1

false + true
// Prediction: 1
// Actual:1

false - true
// Prediction: 0
// Actual: -1

!true
// Prediction: false
// Actual:false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: nan
// Actual: nan