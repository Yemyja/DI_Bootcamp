//PROMISES
function sortWords(word){
    return new Promise ((resolve,reject)=> {
        if (1 === 1){
            resolve();
        }else {
            reject()
        }
        });
    }

    //Código
// Creando Una Promesa Sencilla
    let promise = new Promise((resolve, reject) => { 
  // Code to perform the promised task
  let task_performed = true;
  if(task_performed) { 
    resolve('The promised task was performed successfully.'); 
  } else { 
    reject('The promised task was not performed.'); 
  } 
});  
promise.then((fromRes) => console.log(fromRes)).
  catch((fromRej) => console.log(fromRej));

//   UsandoPromise.all()

// The Promise.all() method returns a single promise that resolves when all of the passed-in promises have resolved. It rejects if one of the promises is rejected.

let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
Promise.all([promise1, promise2]).then( () => {
  console.log("Both the promises have been resolved successfully.");
});
//________________
function getWeather(){
    return new Promise (function(resolve,reject){
        resolve ('Sunny')
    })
}
const promise3 = getWeather()
promise3.then(function(data){
    console.log(data)
})

//----------------

function getWeather(){
    return new Promise (function (resolve,reject){
        resolve ('Sunny')
        //resolve sunny
    })
}
function onSuccess (data){
        console.log (`succes ${data}`)
}


function onError (error){
        console.log (`Error ${error}`)
}

getWeather().then(onSuccess,onError)


//Time out promise

function wait (ms){
    return new Promise (resolve => setTimeout (resolve,ms));
}
//example usage:
wait (5000).then(() => console.log ('5 seconds have passed¡'));

//__________________
function waitandRandomize(ms){
  return new Promise (resolve => {
    setTimeout(()=>{
      const randomNumber = Math.floor(Math.random()* 10) + 1;
      resolve (randomNumber);
    }, ms);
  });
}
// Example usage :
waitandRandomize (1000).then (randomNumber => console.log (`Randome number: ${randomNumber}`));


//______________
function multipluNumbers (num1,num2,ms){
  return new Promise ((resolve,reject) => {
    if (num1 < 0 || num2 < 0 ){
      reject ('Number must be positive');
    } else {
      setTimeout(()=>{
        const result= num1*num2;
      resolve (result);   
      },ms);
    }
  });
}
// Example usage :
multipluNumbers (5,7,1000).then (result => console.log (`Result : ${result}`)).catch (error=> console.log (`Reject: ${reject}`));


//___________
function aNumbers (num1,num2,ms){
  return new Promise ((resolve,reject) => {
    if (num1 <  num2 ){
      reject ('Number 1 must be bigger');
    } else {
      setTimeout(()=>{
        const result= num1+num2;
      resolve (result);   
      },ms);
    }
  });
}
// Example usage :
aNumbers (10,7,1000).then (result => console.log (`Result : ${result}`)).catch (error=> console.log (`Reject: ${reject}`));

//_______________
function divideNumbers(number1,number2){
  return new Promise ((resolve, reject) =>{
    try {
      if (number2===0){
        throw new Error ('cannot divide by zero');
      }
      const outcome = number1 / number2;
    resolve(outcome);
      } catch (error){
        reject(error);
      }
  });
}
//Example usage:
divideNumbers(10,2)
.then (outcome => console.log (`Resultado: ${outcome}`))
.catch(error => error => console.error (`Error: ${errror}`));