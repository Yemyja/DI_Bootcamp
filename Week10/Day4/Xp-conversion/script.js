/ Exercise XP WEEK 10 DAY 4

// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


// SOLUTION:

// async function fetchStarship() {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/");
//     const objectStarWars = await response.json();
//     console.log(objectStarWars.result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchStarship();


// SOLUTION REFACTORED (USE THIS ONE)
async function getStarshipData() {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const result = await response.json();
    console.log("result:", result);
}

getStarshipData();


// We create an async function called fetchStarship which makes an HTTP request to the Star Wars API to 
// fetch information about a starship with ID 9. Inside the function, we use await to wait for the 
// response from the API, and then parse the JSON data using response.json(). We then log the result property 
// of the parsed JSON object to the console.

// We also use a try/catch block to handle any errors that might occur during the HTTP request. Finally, we 
// call fetchStarship at the end of the code to execute the function.




// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?

// The code defines a function called resolveAfter2Seconds which returns a promise that resolves with the 
// string 'resolved' after a delay of 2 seconds. The delay is simulated using setTimeout function.

// The code also defines an async function called asyncCall which logs the string 'calling' to the console, 
// then awaits the result of calling resolveAfter2Seconds(), and logs the result to the console.

// Finally, the code calls the asyncCall function, which starts the asynchronous execution of the function.

// Based on this analysis, the outcome of executing this code will be as follows:

// The string 'calling' will be logged to the console immediately.
// After a delay of 2 seconds, the string 'resolved' will be logged to the console.
// So the overall output will be:

// calling
// resolved
