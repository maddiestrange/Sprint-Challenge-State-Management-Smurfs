import React, { Component } from "react";
import "./App.css";

import SmurfCards from './SmurfCards';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SmurfCards />
      </div>
    );
  }
}

export default App;
