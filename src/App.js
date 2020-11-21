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
// import LogIn from "./main/LogIn";
import "./App.css";

const authContext = createContext();

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function ProvideAuth({children}){
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
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
    signin,
    signout
  }
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome! {" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>
      You are not logged in.
    </p>
  )
}

function PrivateRoute({ children, ...rest}) {
  let auth = useAuth();
  console.log(1);
  console.log(auth.user);
  return (
    <Route 
      {...rest}
      render={({ location }) => {
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/LogIn",
              state: { from: location}
            }}
          />
        )
      }}
    />
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  }, [loggedIn])

  return(
    <ProvideAuth>
      <Router>
      <div className="App">
      <button onClick={() => setLoggedIn(true)}>
          Click me
      </button>
        <Switch>
          {/* <PrivateRoute path="/" exact>
            <Home/> 
          </PrivateRoute> */}
          <Route path="/" exact>
            {/* <Redirect to="/Room" /> */}
            </Route>
          <Route component={LogIn} path="/Room" exact>
            <LogIn />
          </Route>
          {/* <PrivateRoute path="/Room" exact>
            <Room />  
          </PrivateRoute> */}
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
          <Link to="/Room">Room</Link>
        </li>
      </ul>
    </nav>
  )
}

function LogIn() {
  console.log(222);
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default hot(module)(App);