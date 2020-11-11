import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function LogIn() {
  // let history = useHistory();
  // let location = useLocation();
  // let auth = useAuth();

  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  //   auth.signin(() => {
  //     history.replace(from);
  //   });
  // };

  return (
    <div>
      <p>login</p>
      {/* <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button> */}
    </div>
  );
}

export default LogIn;
