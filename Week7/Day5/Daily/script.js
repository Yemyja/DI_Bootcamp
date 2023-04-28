// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

// function allTruthy(parameters) {
//     if (parameters === true) {
//         return true
//     } else {
//         false
//     }
// }  
// const allTruthy = (parameters) => parameters === true ?  true : false
// => this one doesnt work

const allTruthy = (...parameters) => {
    for (const parametr of parameters) {
        if (!param) return false;
    }
    return true;
}

allTruthy()