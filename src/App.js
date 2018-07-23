import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/todo.css";
import TodoList from "./component/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
