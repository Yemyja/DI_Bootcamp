// import React, { startTransition } from "react";

// const clickMe =() => alert("I was clicked");

// export class Events extends React.Component{
//     render() {
//         return(
//             <>
//             <p>Hello fromEvents components</p>
//             <button onClick= {clickMe}>Click</button>
//             </>
//         );
//     }
// }

// import React from "react";

// const clickMe =() => alert("I was clicked");
// const handleKeyPress = (e) =>{
//     if (e.key !== "Enter") return;
//     const message = "the enter key was pressed, your input is: " + e.target.value;
//     alert(message);
// };
// export class Events extends React.Component{
//     render() {
//         return(
//             <>
//             <p>Hello fromEvents components</p>
//             <button onClick= {clickMe}>Click</button>
//             <input type= "text" onKeyDown= {handleKeyPress}/>
//             </>
//         );
//     }
// }



//Exercise xp2-part 3
// import React from "react";

// const clickMe = () => alert("I was clicked");

// const handleKeyPress = (e) => {
//     if (e.key !== "Enter") return;
//     const message = "The enter key was pressed, your input is: " + e.target.value;
//     alert(message);
// };

// export class Events extends React.Component {
//     toggleButton = () => {
//         this.setState({isToggledOn: !this.state.isToggledOn});
//         console.log(this.state);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {isToggledOn: true};
//     }
//     render() {
       
//         return (
//             <>
//             <p>Hello from Events components</p>
//             <button onClick={clickMe}>Click</button>
//             <input type="text" onKeyDown={handleKeyPress} />
//             <button onClick={this.toggleButton}>{this.state.isToggledOn ? "ON" : "OFF"}</button>
//             </>
//         );
//     }
// }

// EXERCISE 2 EVENTS PART 3 REFACTORED WITH FUNCTIONS INSTEAD OF CLASSES:


import React, { useState } from "react";

const clickMe = () => alert("I was clicked");

const handleKeyPress = (e) => {
  if (e.key !== "Enter") return;
  const message =
    "The enter key was pressed, your input is: " + e.target.value;
  alert(message);
};

export const Events = () => {
  const [isToggledOn, setIsToggledOn] = useState(true);

  const toggleButton = () => {
    setIsToggledOn(!isToggledOn);
    // console.log(isToggledOn);
  };

  return (
    <>
      <p>Hello from Events component</p>
      <button onClick={clickMe}>Click</button>
      <input type="text" onKeyDown={handleKeyPress} />
      <button onClick={toggleButton}>
        {isToggledOn ? "ON" : "OFF"}
      </button>
    </>
  );
};

