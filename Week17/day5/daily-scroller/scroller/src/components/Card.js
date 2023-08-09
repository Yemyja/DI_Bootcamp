// // //STEP 1
// import React, { Component } from 'react';
// import "./Card.css";

// export default class Card extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render() {
//         return (
//             <div className='card'>
//                 <div className='card_subtitle'>
//                 <i className={this.props.info.icon}></i>
//                 <h2>{this.props.info.title}</h2>
//                 </div>
//                 <h3>{this.props.info.points}</h3>
//             </div>
//         );
//     }
// }





//STEP 2 (Do after reaching step 4 in App.js)


// import React, { Component } from 'react';
// import "./Card.css";

// export default class Card extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render() {
//         const icon = this.props.info.icon;
//         const title = this.props.info.title;
//         const points = this.props.info.points;

//         return (
//             <div className='card'>
//                 <div className='card_subtitle'>
//                 <i className={icon}></i>
//                 <h2>{title}</h2>
//                 </div>
//                 <h3>{points}</h3>
//             </div>
//         );
//     }
// }





// // STEP 3


// import React, { Component } from 'react';
// import "./Card.css";


// export default class Card extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render() {
//         const {icon, title, points} = this.props.info;

//         return (
//             <div className='card'>
//                 <div className='card_subtitle'>
//                 <i className={icon}></i>
//                 <h2>{title}</h2>
//                 </div>
//                 <h3>{points}</h3>
//             </div>
//         );
//     }
// }




// // STEP 3 (FUNCTIONAL COMPONENT)


// import React from "react";
// import "./Card.css";

// const Card = (props) => {
//     const { icon, title, points } = props.info;

//     return (
//         <div className="card">
//             <div className="card_subtitle">
//                 <i className={icon}></i>
//                 <h2>{title}</h2>
//             </div>
//             <h3>{points}</h3>
//         </div>
//     );
// };

// export default Card;










// // EXTRA STEP (Set default Icon)


// import React, { Component } from 'react';
// import "./Card.css";
// export default class Card extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render() {
//         const {icon, title, points} = this.props.info;
//         const isIconEmpty = (icon) => {
//             if (icon === null) return true;
//             if (icon === undefined) return true;
//             if (icon === "") return true;
//             return false;
//         };
//         const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon; 
//         return (
//             <div className='card'>
//                 <div className='card_subtitle'>
//                 <i className={iconName}></i>
//                 <h2>{title}</h2>
//                 </div>
//                 <h3>{points}</h3>
//             </div>
//         );
//     }
// }







// EXTRA STEP (Set default Icon) Refactored


// import React, { Component } from 'react';
// import "./Card.css";

// export default class Card extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render() {
//         const {icon, title, points} = this.props.info;

//         const isIconEmpty = (icon) => {
//             if ([null, undefined, ""].includes(icon)) return true;
//             return false;
//         };
//         const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon; 

//         return (
//             <div className='card'>
//                 <div className='card_subtitle'>
//                 <i className={iconName}></i>
//                 <h2>{title}</h2>
//                 </div>
//                 <h3>{points}</h3>
//             </div>

//         );
//     }
// }




//REFACTORED INTO FUNCTIONAL COMPONENT


import React from "react";
import "./Card.css";

const Card = (props) => {
    const { icon, title, points } = props.info;

    const isIconEmpty = (icon) => {
        if ([null, undefined, ""].includes(icon)) return true;
        return false;
    };

    const iconName = isIconEmpty(icon) ? "fa-regular fa-bookmark" : icon;

    return (
        <div className="card">
            <div className="card_subtitle">
                <i className={iconName}></i>
                <h2>{title}</h2>
            </div>
            <h3>{points}</h3>
        </div>
    );
};

export default Card;