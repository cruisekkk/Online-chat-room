import React, { useContext, createContext, useState, useEffect } from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Room from "./main/Room";
import LogIn from "./main/LogIn";
// import style from "./App.css";
import { StyleRounded } from "@material-ui/icons";
const authContext = createContext();

function ProvideAuth({children}){
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    })
  }

  return {
    user,
    setUser,
    signin,
    signout
  }
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  }, [loggedIn])

  return(
    <ProvideAuth>
      <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
            </Route>
          <Route path="/Room" exact>
            {loggedIn ? 
            <Room />  : <Redirect
            to={{
              pathname: "/LogIn",
            }}/>
          }
          </Route>
          <Route path="/LogIn" exact>
              <LogIn setLoggedIn={setLoggedIn}/>
            </Route>
        </Switch>
      </div>
      </Router>
     </ProvideAuth>
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
          <Link to="/Room">Enter The Room</Link>
        </li>
      </ul>
    </nav>
  )
}

export default hot(module)(App);