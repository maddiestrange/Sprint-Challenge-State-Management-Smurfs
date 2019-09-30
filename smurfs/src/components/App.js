import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import {} from '../actions'
import SmurfCards from './SmurfCards';
import SmurfForm from './SmurfForm';

function App() {
  render() {
    return (
      <div className="App">
       <SmurfForm />
       <SmurfCards />
      </div>
    );
  }
}

export default App;
