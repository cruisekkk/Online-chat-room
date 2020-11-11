import React, { useContext, createContext, useState } from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Room from "./main/Room";
import LogIn from "./main/LogIn";
import "./App.css";

function App() {
  return(
    <Router>
    <div className="App">
      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/LogIn" exact>
          <LogIn />
        </Route>
        <Route path="/Room" exact>
          <Room />  
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/LogIn">LogIn</Link>
        </li>
        <li>
          <Link to="/Room">Room</Link>
        </li>
      </ul>
    </nav>
  )
}

export default hot(module)(App);