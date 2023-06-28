// import React from "react";

// const carinfo = { name: "Ford", model: "Mustang"};

// export class Car extends React.Component {
//     render(){
//         return(
//             <>
//             <header>This car is a {carinfo.model}</header>
//             <h1>This is a car </h1>
//             </>
//             )
//         }  
//       }

    //   // otra opcion mejor import React from "react";
    //   import React from "react";
    //   import { Garage } from "./Garage";
      
    //   const carinfo = { name: "Ford", model: "Mustang" };
      
    //   export class Car extends React.Component {
    //       constructor() {
    //           super();
    //           this.state = {color: "red"};
    //       }
    //       render() {
    //           return (
    //               <>
    //               <header>This car is a {carinfo.model}</header>
    //               <h1>This car is {this.state.color}</h1>
    //               <p>Garage Component:</p>
    //               <Garage/>
    //               <Garage size = "small"/>
    //               <Garage size = "medium"/>

    //               </>
    //           )
    //       }
    //   }


    import React from "react";
      import { Garage } from "./Garage";
      
      const carinfo = { name: "Ford", model: "Mustang" };
      
      export function Car(){
        const color= "red";
      
              return (
                  <>
                  <header>This car is a {carinfo.model}</header>
                  <h1>This car is {color}</h1>
                  <p>Garage Component:</p>
                  <Garage/>
                  <Garage size = "small"/>
                  <Garage size = "big"/>
                  <Garage size = "medium"/>

                  </>
              );
          }
      

