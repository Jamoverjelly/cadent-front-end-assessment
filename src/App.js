import React, { Component } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import reactLogo from "./reactLogo.svg";
import reduxLogo from "./reduxLogo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <img src={reduxLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Grocery Store</h1>
        </header>
        <ListContainer />
      </div>
    );
  }
}

export default App;
