function playTheGame() {
  const wantToPlay = confirm("Do you want to play the game?");

  if (!wantToPlay) {
   return alert("No problem, goodbye!");
    return;
  }

  let userNumber = prompt("Enter a number between 0 and 10:");
  if (isNaN(userNumber)) {
    alert("Sorry, not a number. Goodbye!");
    return;
  }

  userNumber = Number(userNumber);

  if (userNumber < 0 || userNumber > 10) {
    alert("Sorry, it's not a good number. Goodbye!");
    return;
  }

  const computerNumber = Math.round(Math.random() * 10);

  compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  let attempts = 0;

  while (attempts < 3) {
    if (userNumber === computerNumber) {
      alert("WINNER!");
      return;
    } else if (userNumber > computerNumber) {
      userNumber = prompt("Your number is bigger than the computer's, guess again:" + computerNumber + " " + userNumber);
      attempts++;
     
    } else {
      userNumber = prompt("Your number is smaller than the computer's, guess again:" + computerNumber + " " + userNumber);
      attempts++;
      
    }
  }

  alert("Out of chances!");
}




// function playTheGame(){

// const playGame = confirm(" Do you would like to play the game?")

// if (!playGame) {
//     alert ("No problem, Goodbye");
//     return;

// }

// const userNumber = prompt ( "Pleas enter a number between 0 and 10.");
// if(!isOnlyNumber(userNumber)){
//     alert( "Sorry not a number, goodbye.");
//     return;
// }
// userNumber=Number(userNumber);

// if( userNumber < 0 || userNumber >10 ){
//     alert( "Sorry its not a good number, Goodbye");
//     return;
//     let computerNumber;
//     computerNumber = Math.floor(Math.random()* 10);
//     resultNumbers(userNumber,computerNumber);
// }else if( userNumber <= 0 || userNumber <=10 ){
//     let computerNumber =  Math.floor(Math.random()* 10);
// return 
// }

//
  
// function resultNumbers (userNumber,computerNumber, guesses) {
//     if (userNumber === computerNumber){
//     alert ("WINNER");
//     return;
// }
// else if (userNumber > computerNumber){
//  alert ("Your number is bigger then the computers, guess again") ;prompt ("try another number");
//  return false;
// }

// else if (userNumber < computerNumber){
//     alert ("Your number is smaller then the computers, guess again");prompt ("try another number")
// return false;
// }
// else (guesses>3)
// alert ("out of chances");
// return true;
//    }
//    console.log (userNumber)
// }
// function isOnlyNumber(str){
//     const  regex = new RegExp (/^[0-9]1*$/);
//     return regex.test (str)

// }
   