import React, { useContext, createContext, useState, useEffect } from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Room from "./main/Room";
import LogIn from "./main/LogIn";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  }, [loggedIn])
  return(
    <Router>
    <div className="App">
    <button onClick={() => setLoggedIn(true)}>
        Click me
    </button>
      <Switch>
        <Route path="/" exact>
          { loggedIn ? <Redirect to="/Room"/> : <Home/> }
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