
// Exercise 1 : Users

// Instructions

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


// const container = document.getElementById("container")
//   console.log('container:', container)
//   document.querySelector(".list").children[1].textContent = "Richard"
//   const lists = document.querySelectorAll(".list")
//   lists.forEach(list => list.firstElementChild.textContent = "Yemy")
//   lists[1].children[1].remove()
//   lists.forEach(list => list.classList.add("student_list"))
//   console.log(lists)
//   const firstUl = document.querySelector('ul.list.student_list')
//   firstUl.classList.add("university", "attendance")
//   console.log(firstUl)

//   Exercise 2 : Users And Style
// const div = document.querySelector("div")

// //   Instructions
// //   Add a “light blue” background color and some padding to the <div>.
// //   Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// 
//   Change the font size of the whole body.
  
//   Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
const div = document.querySelector("div")
console.log(div?.style)

const divBackground = getComputedStyle(div).backgroundColor
const users = document.querySelectorAll("li")
console.log("users:", users)

if (divBackground === "rgb(173, 216, 230)") {
  console.log("this is lightblue!")
  console.log(`Hello ${users[0].textContent} and ${users[1].textContent} !`)
} 


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navBar= document.getElementById("navBar");
console.log ("navBar:",navBar)
navBar?.setAttribute("id", "socialNetworkNavigation")
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const li=document.createElement("li")
console.log ("li",li)
// Create a new text node with “Logout” as its specified text.
const logout= document.createTextNode("logaout")
console.log ("logout:", logout)
// Append the text node to the newly created list node (<li>).
li.appendChild(logout)
console.log ("li:",li)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul = navBar?.firstElementChild
console.log("li",li)
ul?.appendChild(li)
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const firstLi = ul?.firstElementChild
const lastLi= ul?.lastElementChild

console.log ("firstLi:",firstLi)
console.log (firstLi?.textContent)

console.log ("second li container")
console.log (lastLi?.textContent)


// Para crear un n uevo texto
// const textNode= document.createTextNode("Hola mundo");
// document.body.appendChild(textNode)


// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
const allBooks =[]
const book1 = {
    title:"Frankestein",
    author:"Mary Shelly",
    image:"https://picsum.photos/200",
    alreadyRead:true
}

const book2 = {
    title:"A flor de piel",
    author:"Javier Mora",
    image:"https://picsum.photos/100",
    alreadyRead:false
}
allBooks.push(book1 ,book2)
console.log ("allBooks:", allBooks)
const table =document.createElement("table")
table.innerHTML= `
    <thead>
        <tr>
            <th colspan="1">My book span list</th>
        </tr>
    </thead>
    <tbody>
    <tr class= " ${book1.alreadyRead ? "is-read" : ""}">
    <td> ${book1.title} written by ${book1.author}</td>
    <td> <img src= "${book1.image}"></td>
    <td> Already read: ${book1.alreadyRead}</td>
    </tr>
    <tr class= " ${book2.alreadyRead ? "is-read" : ""}">
    <td> ${book1.title} written by ${book2.author}</td>
    <td> <img src= "${book2.image}"></td>
    <td> Already read: ${book2.alreadyRead}</td>
    </tr>
    </tbody></>
`
const bookListDiv = document.querySelector(".listBooks")
console.log ("bookListDiv:",bookListDiv)
bookListDiv?.appendChild(table)
console.log(table)



// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
