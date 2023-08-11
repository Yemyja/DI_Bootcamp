
// import React, { Component } from 'react';
// import {connect} from "react-redux";

// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }


//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>this.props.dispatch({type: "DECREMENT"})}>-</button>
     
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }

// export default connect(mapStateToProps)(Counter);


// //part 2


// import React, { Component } from 'react';
// import {connect} from "react-redux";

// class Counter extends Component {
//     constructor(props){
//         super(props)
//         console.log(props);
//     }

//       handleIncrementAsync = () => {
//     setTimeout(() => {
//         this.props.dispatch(incrementAction);
//     }, 1000);
// }

//   render() {
//     return (
//       <div>Counter: {this.props.counter}
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>this.props.dispatch({type: "DECREMENT"})}>-</button>
//       <button onClick={()=>this.props.dispatch({type: "INCREMENT_IF_ODD"})}>Increment if odd</button>
//       <button onClick={()=>this.handleIncrementAsync}>Increment async</button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return {counter: state.counterReducer}
//   }

// export default connect(mapStateToProps)(Counter);




//PART 3 (actions/counter.actions.js)

import React, { Component } from 'react';
import {connect} from "react-redux";
import { decrementAction, incrementAction, incrementIfOdd } from '../actions/counter.actions';

class Counter extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    handleIncrementAsync = () => {
        setTimeout(() => {
            this.props.dispatch(incrementAction);
        }, 1000);
    }
  render() {
    return (
      <div>Counter: {this.props.counter}
      <button onClick={()=>this.props.dispatch(incrementAction)}>+</button>
      <button onClick={()=>this.props.dispatch(decrementAction)}>-</button>
      <button onClick={()=>this.props.dispatch(incrementIfOdd)}>Increment if odd</button>
      <button onClick={this.handleIncrementAsync}>Increment async</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {counter: state.counterReducer}
  }

export default connect(mapStateToProps)(Counter);