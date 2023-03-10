
// Using a DOM property, retrieve the h1 and console.log it.

    const h1 = document.querySelector('h1');
    console.log(h1.textContent);

// Using DOM methods, remove the last paragraph in the <article> tag.

    const paragraphs = document.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

    const h2 = document.querySelector('h2');
    h2.addEventListener('click', () => {
        h2.style.backgroundColor = 'red';
    });

    // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

    const h3 = document.querySelector('h3');
    h3.addEventListener('click', () => {
        h3.style.display = 'none';
    });

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

    const boldBtn = document.querySelector('#bold-btn');
    boldBtn.addEventListener('click', () => {
        paragraphs.forEach(p => {
            p.style.fontWeight = 'bold';
        });
    });

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

    const getRandomSize = () => Math.floor(Math.random() * 101);

    h1.addEventListener('mouseenter', () => {
        h1.style.fontSize = `${getRandomSize()}px`;
    });

    // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

    paragraphs[1].addEventListener('mouseenter', () => {
        paragraphs[1].classList.add('fade');
    });


    // Exercise 2 : Work With Forms
//     Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form);
// Retrieve the inputs by their id and console.log them.

const firstNameInput = document. querySelector ('#fname') ;
const lastNameInput = document.querySelector ('#lname') ;
console. log (firstNameInput, lastNameInput) ;

// Retrieve the inputs by their name attribute and console.log them.

const firstNameInputByName = document.querySelector ('input [name="fname" ] ') ;
const lastNameInputByName = document.querySelector ('input [name=" lname" ] ');
console. log (firstNameInputByName, lastNameInputByName) ;


const submitButton = document. querySelector( '#submit');
const usersAnswerList = document. querySelector ('.usersAnswer');

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

form. addEventListener ('submit', function (event) {
event. preventDefault ()

const firstName = firstNameInput.value.trim() ;
const lastName = lastNameInput. value. trim () ;

if (!firstName || !lastName) {
alert ('Please enter both first name and last name');
return;}
const firstNameLi = document.createElement('li');
firstNameLi.textContent= firstName;

const lastNameLi = document.createElement('li');
    lastNameLi.textContent= firstName;

    usersAnswerList.appendChild (firstNameLi);
    usersAnswerList.appendChild (lastNameLi);

    firstNameInput.value ="";  // esto hace que la info que ponemos en el input se borre despues del submit para poder volver a llenarlo
    lastNameInput.value ="";
});


// Exercise 3 : Transform The Sentence

// Instructions
// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items(){
    allBoldItems = document.getElementsByTagName ('strong');
}
// Create a function called highlight() that changes the color of all the bold text to blue. 
function highlight(){
    for (let i = 0; i< allBoldItems.length; i++){
        allBoldItems[i].style.color = 'blue';
    }
}
// Create a function called return_normal() that changes the color of all the bold text back to black. 
function return_normal(){
    for (let i = 0; i< allBoldItems.length; i++){
        allBoldItems[i].style.color = 'black';
    }
}
getBold_items();
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

document.querySelector('span').addEventListener('mouseover',highlight);
document.querySelector('span').addEventListener('mouseout',return_normal);


// Exercice 4 : Volume Of A Sphere
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:


// const form = document.querySelector ('#myForm');
// const radiusInput = document.querySelector('#radius');
// const volumeInput = document.querySelector('#volume');

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();

//     const radius = Number(radiusInput.value);
//                 const volume = (4/3) * Math.PI * Math.pow(radius, 3);
//                 volumeInput.value = volume.toFixed(2); // display the result in the volume input
//             });


// Exercise 5 : Event Listeners

// Instructions

// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.


const myButton = document.getElementById('myButton');

myButton.addEventListener('click',()=>{
    myButton.style.backgroundColor = 'red';
    myButton.style.color = 'blue';
    myButton.style.fontSize = '18px';
    myButton.style.top = '0';
    myButton.style.left = '0';
    myButton.style.fontStyle = 'bold';
});

myButton.addEventListener('mouseover',()=>{
    myButton.style.backgroundColor = 'linear gradient (red,green)';
    myButton.style.color = 'black';
    myButton.style.fontSize = '8px';
    myButton.style.top = '3px';
    myButton.style.margin = '30px';
    myButton.style.left = '10';
    myButton.style.fontStyle = 'bold';
    myButton.style.padding = '10px';
    myButton.style.borderRadius = '20px';
});

myButton.addEventListener('mouseout',()=>{
    myButton.style.backgroundColor = 'yellow';
    myButton.style.color = 'red';
    myButton.style.fontSize = '28px';
    myButton.style.fontvariant = 'small-caps';
    myButton.style.left = '180 px';
    myButton.style.fontStyle = 'bold';
    myButton.style.padding = '10px';
    myButton.style.bordercolor = 'solid blue 3px';
});

myButton.addEventListener('dblclick',()=>{
    myButton.style.backgroundColor = 'orange';
    myButton.style.color = 'purple';
    myButton.style.fontSize = '28px';
    myButton.style.top = '35px';
    myButton.style.fontvariant = 'small-caps';
    myButton.style.left = '114px';
    myButton.style.fontStyle = 'arial';
    myButton.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    myButton.style.transform = 'skewX(30deg)';
});	

