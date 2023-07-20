import React, {Fragment}from "react";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment> 
    <div className="Container">
      <InputTodo />
      <ListTodos />
    </div>
    </Fragment>
  );
}

export default App;
