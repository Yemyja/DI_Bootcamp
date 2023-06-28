
//     import React, {Component} from "react";

// export class Color extends Component{
//     constructor(props){
//         super(props)
//         this.state = {favoritColor: "red"};
//     }

//     changeColor = () => {
//         this.setState ({favoriteColor: "blue"});
//     }
//     render (){
//         <>
//         return <h1> My favorite color is: {this.state.favoriteColor}</h1>;
//         <button onClick={this.changeColor}>Change color to blue</button>
//         </>
//     }
//     componentDiMount() {
//         setTimeout(() =>{
//             this.setState({favoritColor: "yellow"});
//         },5000);
//     }
//     }

import React, { useState, useEffect } from "react";
export const Color = () => {
const [favoriteColor, setFavoriteColor] = useState ("red");

const changeColor = () => {
setFavoriteColor ("blue");
};
useEffect ( () => {
const timeout = setTimeout ( ( ) => {
setFavoriteColor ("yellow");
}, 5000);

return () => clearTimeout (timeout);
}, []);

return (
    <>
     <h1>My favorite color is: {favoriteColor}</h1>
<button onClick={changeColor}>Change color to blue</button>
</>
);
};
