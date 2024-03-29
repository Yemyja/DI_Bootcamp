
// //STEP 1 *

// import React from "react";
// import Card from "./components/Card";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//     <Card info={{points: 3000, icon: "fa-solid fa-star", title: "Points"}}/>
//     <Card info={{points: 1000, icon: "fa-solid fa-diamond", title: "Diamonds"}}/>
//     <Card info={{points: 500, icon: "fa-solid fa-handshake-simple", title: "Shakas"}}/>
//     <Card info={{points: 200, icon: "fa-solid fa-bolt-lightning", title: "Lightning"}}/>
//   </div>
//   )
// }
// export default App;






// // //STEP 2

// import React from "react";
// import Card from "./components/Card";
// import "./App.css";

// const cards = [
// {points: 3000, icon: "fa-solid fa-star", title: "Points"},
// {points: 1000, icon: "fa-solid fa-diamond", title: "Diamonds"},
// {points: 500, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
// {points: 200, icon: "fa-solid fa-bolt-lightning", title: "Lightning"}
// ];

// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//     <Card info={cards[0]}/>
//     <Card info={cards[1]}/>
//     <Card info={cards[2]}/>
//     <Card info={cards[3]}/>
//   </div>
//   )
// }

// export default App;





// //STEP 3

// import React from "react";
// import Card from "./components/Card";
// import "./App.css";

// const cards = [
// {points: 3000, icon: "fa-solid fa-star", title: "Points"},
// {points: 1000, icon: "fa-solid fa-diamond", title: "Diamonds"},
// {points: 500, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
// {points: 200, icon: "fa-solid fa-bolt-lightning", title: "Lightning"}
// ];

// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//    {cards.map((card) => (
//     <Card info={card}/>
//    ))}
//   </div>
//   )
// }
// export default App;






// //STEP 4

// import React from "react";
// import Card from "./components/Card";
// import "./App.css";

// const cards = [
// {points: 9000, icon: "fa-solid fa-star", title: "Points"},
// {points: 8000, icon: "fa-solid fa-diamond", title: "Diamonds"},
// {points: 7000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
// {points: 6000, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
// {points: 5000, icon: "fa-solid fa-star", title: "Points"},
// {points: 4000, icon: "fa-solid fa-diamond", title: "Diamonds"},
// {points: 3000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
// {points: 2000, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
// {points: 1000, icon: "fa-solid fa-star", title: "Points"},
// {points: 900, icon: "fa-solid fa-diamond", title: "Diamonds"},
// {points: 800, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
// {points: 700, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
// ];

// function App() {
//   return (
//     <div className="app">
//       <h1>App</h1>
//    {cards.map((card, i) => (
//     <Card info={card} key={i}/>
//    ))}
//   </div>
//   )}
// export default App;








// //EXTRA STEP (Set Default Icon)

import React from "react";
import Card from "./components/Card";
import "./App.css";

const cards = [
{points: 9000, icon: null, title: "Points"},
{points: 8000, icon: "fa-solid fa-diamond", title: "Diamonds"},
{points: 7000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
{points: 6000, icon: "", title: "Lightning"},
{points: 5000, icon: "fa-solid fa-star", title: "Points"},
{points: 4000, icon: undefined, title: "Diamonds"},
{points: 3000, icon: "fa-solid fa-handshake-simple", title: "Shakas"},
{points: 2000, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
{points: 1000, icon: "fa-solid fa-star", title: "Points"},
{points: 900, icon: "fa-solid fa-diamond", title: "Diamonds"},
{points: 800, icon: "", title: "Shakas"},
{points: 700, icon: "fa-solid fa-bolt-lightning", title: "Lightning"},
];

function App() {
  return (
    <div className="app">
      <h1>App</h1>
   {cards.map((card, i) => (
    <Card info={card} key={i}/>
   ))}
  </div>
  )

}

export default App;






// // ARROW FUNCTION COMPONENT (with set default icon)


// import React from "react";
// import Card from "./components/Card";
// import "./App.css";

// const cards = [
//   { points: 9000, icon: null, title: "Points" },
//   { points: 8000, icon: "fa-solid fa-diamond", title: "Diamonds" },
//   { points: 7000, icon: undefined, title: "Shakas" },
//   { points: 6000, icon: "fa-solid fa-bolt-lightning", title: "Lightning" },
//   { points: 5000, icon: "fa-solid fa-star", title: "Points" },
//   { points: 4000, icon: "", title: "Diamonds" },
//   { points: 3000, icon: "fa-solid fa-handshake-simple", title: "Shakas" },
//   { points: 2000, icon: "fa-solid fa-bolt-lightning", title: "Lightning" },
//   { points: 1000, icon: undefined, title: "Points" },
//   { points: 900, icon: "fa-solid fa-diamond", title: "Diamonds" },
//   { points: 800, icon: "fa-solid fa-handshake-simple", title: "Shakas" },
//   { points: 700, icon: "", title: "Lightning" },
// ];

// const App = () => {
//   return (
//     <div className="app">
//       <h1>App</h1>
//       {cards.map((card, i) => (
//         <Card info={card} key={i} />
//       ))}
//     </div>
//   );
// };

// export default App;








// // CLASS COMPONENT (with set default icon)


// import React, { Component } from "react";
// import Card from "./components/Card";
// import "./App.css";

// const cards = [
//   { points: 9000, icon: "fa-solid fa-star", title: "Points" },
//   { points: 8000, icon: "fa-solid fa-diamond", title: "Diamonds" },
//   { points: 7000, icon: "fa-solid fa-handshake-simple", title: "Shakas" },
//   { points: 6000, icon: "fa-solid fa-bolt-lightning", title: "Lightning" },
//   { points: 5000, icon: "fa-solid fa-star", title: "Points" },
//   { points: 4000, icon: "fa-solid fa-diamond", title: "Diamonds" },
//   { points: 3000, icon: "fa-solid fa-handshake-simple", title: "Shakas" },
//   { points: 2000, icon: "fa-solid fa-bolt-lightning", title: "Lightning" },
//   { points: 1000, icon: "fa-solid fa-star", title: "Points" },
//   { points: 900, icon: "fa-solid fa-diamond", title: "Diamonds" },
//   { points: 800, icon: "fa-solid fa-handshake-simple", title: "Shakas" },
//   { points: 700, icon: "fa-solid fa-bolt-lightning", title: "Lightning" },
// ];

// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <h1>App</h1>
//         {cards.map((card, i) => (
//           <Card info={card} key={i} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
