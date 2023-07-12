
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
// import { ErrorBoundary } from './components/ErrorBoundary';
// import {BrowserRouter} from 'react-router-dom';
// import{Routes, Route,NavLink } from 'react-router-dom';

// const routes = (
//   <Routes>
//     <Route path= '/' element={<HomeScreen />}></Route>
//     <Route path= '/profile' element={<ProfileScreen />}></Route>
//     <Route path= '/shop' element={<ShopScreen />}></Route>
//   </Routes>
// );
// export default class App extends React.Component {
//   render(){
//     return(
//       <ErrorBoundary>
//         <BrowserRouter>
//         <Navbar/>
//         {routes}
//         </BrowserRouter>
//       </ErrorBoundary>
//     )
//   }
// }
// function Navbar(){
//   return(
//     <div>
//       <nav className= 'nav nav-pills'>
//         <NavLink className = 'nav-link' to = '/'>Home </NavLink>
//         <NavLink className = 'nav-link' to = '/profile'>Profile </NavLink>
//         <NavLink className = 'nav-link' to = '/shop'>Shop </NavLink>

//       </nav>
//     </div>
//   )
// }

// function HomeScreen(){
// return <h1> Home </h1>
// }
// function ProfileScreen(){
//   return <h1> Profile</h1>
  
// }
// function ShopScreen(){
//   return <h1> Shop</h1>
  
// }


// ----------la forma correcta es la siguiente ---------

// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
// import { ErrorBoundary } from 'react-error-boundary'
// import{BrowserRouter, Routes, Route,NavLink } from 'react-router-dom';


// const routes = (
//     <Routes>
//       <Route path= '/' element={<HomeScreen />}></Route>
//       <Route path= '/profile' element={<ProfileScreen />}></Route>
//       <Route path= '/shop' element={<ShopScreen />}></Route>
//     </Routes>
//   );
//   const App= () =>{

// return(

//             <BrowserRouter >
//             <Navbar/>
//             <ErrorBoundary FallbackComponent = {ErrorFallback}>
//             {routes}
//             </ErrorBoundary>
//             </BrowserRouter>
        
//         );
//       };
    
//     function Navbar(){
//       return(
//         <div>
//           <nav className= 'nav nav-pills flex-column'>
//             <NavLink className = 'nav-link' to = '/'>Home </NavLink>
//             <NavLink className = 'nav-link' to = '/profile'>Profile </NavLink>
//             <NavLink className = 'nav-link' to = '/shop'>Shop </NavLink>
    
//           </nav>
//         </div>
//       )
//     }
    
//     function HomeScreen(){
//     return <h1> Home </h1>
//     }
//     function ProfileScreen(){
//       return <h1> Profile</h1>
      
//     }
//     function ShopScreen(){
//       return <h1> Shop</h1>
      
//     }
//     function ErrorFallback(){
//       return <h1>An error has ocured</h1>
//     }
//     export default App;


// ------------------
// Exercise2


// get all post


// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { PostList } from "./components/PostList";

// const routes = (
//   <Routes>
//     <Route path="/" element={<PostList />} />
//     <Route path="/profile" element={<ProfileScreen />} />
//     <Route path="/shop" element={<ShopScreen />} />
//   </Routes>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// function Navbar() {
//   return (
//     <div>
//       <h1>Welcome to React Router & Bootstrap!</h1>

//       <nav className="nav nav-pills flex-column">
//         <NavLink className="nav-link" to="/">
//           Posts
//         </NavLink>
//         <NavLink className="nav-link" to="/profile">
//           Profile
//         </NavLink>
//         <NavLink className="nav-link" to="/shop">
//           Shop
//         </NavLink>
//       </nav>
//     </div>
//   );
// }



// function ProfileScreen() {
//   return <h1>Profile</h1>;
// }

// function ShopScreen() {
//   return <h1>Shop</h1>;
// }

// function ErrorFallback() {
//   return <h1>An error has occurred.</h1>;
// }

// export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Expiriences} from './components/Expiriences';
// import {Skills} from './components/Skills';
// import {SocialMedia} from './components/SocialMedia';


// const routes = (
//   <Routes>
//     <Route path="/" element={<SocialMedia />} />
//     <Route path="/expiriences" element={<Expiriences/>} />
//     <Route path="/skills" element={<Skills />} />
//   </Routes>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// function Navbar() {
//   return (
//     <div>
//       <h1>Welcome to React Router & Bootstrap!</h1>

//       <nav className="nav nav-pills flex-column">
//         <NavLink className="nav-link" to="/">
//           Social media
//         </NavLink>
//         <NavLink className="nav-link" to="/expiriences">
//          Expiriences
//         </NavLink>
//         <NavLink className="nav-link" to="/skills">
//          Skills
//         </NavLink>
//       </nav>
//     </div>
//   );
// }


// function ErrorFallback() {
//   return <h1>An error has occurred.</h1>;
// }

// export default App;


// ---------exercises 4------------

// import React from 'react'
// export class App extends React.Component {
//   handleClick = async () => {
// const url = 'https://webhook.site/9591217f-c7cd-4eae-82b7-1dfbb1740042'
// try {
// const body = {
// key1: 'myusername', 
// email: 'mymail@gmail.com', 
// name: 'Isaac', 
// lastname:'Doe',
// age: 27
// }
// const options = {
// method: "POST",
// headers: {
// "Content-Type": "application/json"},
// body: JSON.stringify (body)
// };
// const res = await fetch(url, options);
// console.log ("res:", res);
// } catch (err) {
// console.error (err);
// }
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>Post Data</button>
//     );
//   } }
//   export default App;

// functional component :

import React from 'react';

const App = () => {
  const handleClick = async () => {
    const url = 'https://webhook.site/9591217f-c7cd-4eae-82b7-1dfbb1740042';
    try {
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
      const res = await fetch(url, options);
      console.log('res:', res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleClick}>Post Data</button>
  );
};

export default App;


