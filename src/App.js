import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Room from "./main/Room"
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Room/>  
      </div>
    );
  }
}

export default hot(module)(App);