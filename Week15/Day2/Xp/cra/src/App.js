
// import React from "react";
// import{UserFavoriteAnimals} from "./components/FavoriteAnimals.components";
// // function App (){
// return(
//   <h1>We do not use JSX</h1>
// )
// }

// export default App; // cuando tenemos esta oganizacion no tenemos que poner los corchetes a donde lo estamos importando

// exercises2

// export  function App(){  //cuando tenemos esta oganizacion si tenemos que poner los corchetes a donde lo estamos importando
//   const myelement = <h1> Hello world </h1>;
//   return myelement
// }


// export default function App(){
//   const myelement = <h1> Hello world </h1>;
//   return myelement
// }

// part2- part 3

// export default function App (){
//   const sum = 5+5;
//   const myelement= <h1>React is {sum} times better with JSX!</h1>
//   return myelement;
// }

// asi seria mas corto y da lo mismo
// export default function App (){
//   const sum = 5+5;
//  return myelement= <h1>React is {sum} times better with JSX!</h1>
// // }

// export  default function App(){
//   return (
//     <>
//     <h3>Hello</h3>
//     <h3>World</h3>
//     </>

//   );
// }

// ecercises 3

// export default function App(){
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   } 
//   return ( 
//   <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteAnimals/>
//     </>
//     ) ;
// }
// function UserFavoriteAnimals(){
// return<p>favorite colors</p>;
// }
// -------------
// export default function App(){
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   } 
//   return ( 
//   <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteAnimals favorites ={user.favAnimals}/>
//     </>
//     ) ;
// }
// function UserFavoriteAnimals(props){
//  console.log ("props:", props)
// const favorites = props.favorites;
// console.log("favorites:",favorites)

// return <p>{favorites}</p>
// }
// -----------------

// 
// function UserFavoriteAnimals(props){
//    console.log ("props:", props)
//   const favorites = props.favorites;
//  return favorites.map((favorite,i)=> <li key={1}>{favorite}</li>); // react te pide el key para no marcar error.
  
// }


//Destructuring

// function UserFavoriteAnimals(props){
//   const {favorites} = props; 
//   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
// }



//More Destructuring

    // function UserFavoriteAnimals({favorites}){
    //   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
    // }


    //More Destructuring with arrow function
    // We can also eliminate curly braces before return and return since it is only one element

    // const UserFavoriteAnimals = ({favorites}) => {
    //   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
    // }



// // exercise 4
// import React from 'react';
// import {Exercise4} from './components/Exercise4';

// export const App = () => {
//   return (
//     <div>
//       <Exercise4 />
//     </div>
//   );
// };

//DAILY CHALLENGE

import React from "react";
import {DemoCarousel} from "./components/DemoCarousel";

export function App(){
  return(
    <>
    <DemoCarousel />
    </>
  )
}

