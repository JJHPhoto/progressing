import React from "react";
import { Route, Switch } from "react-router-dom";
import Start from "./pages/Start/Start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import HowTo from "./pages/HowTo";
import Developers from "./pages/Developers";
import CreateGoal from "./pages/CreateGoal";
import LogoutButton from "./components/LogoutButton";
import NotFound from "./pages/NotFound/NotFound";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import GuestRoute from "./components/GuestRoute";
import PrivateRoute from "./components/PrivateRoute";
// Importing to overwrite bootstrap 'bg-success' color, TSK 
import "./style.css";

function App() {
  const isReauthDone = useAuthTokenStore();

  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App" style={{maxHeight: "75%"}}>
      {isReauthDone && (
        <Switch>
          <GuestRoute redirectTo="/home" exact path="/" component={Start} />
          <GuestRoute
            redirectTo="/home"
            exact path="/login"
            component={Login}
          />
          <GuestRoute
            redirectTo="/home"
            exact path="/signup"
            component={SignUp}
          />
          <PrivateRoute
            exact path="/home"
            component={Home}
          />
          <PrivateRoute
            exact path="/creategoal"
            component={CreateGoal}
          />
          <Route
            exact path="/about"
            component={About}
          />
          <Route
            exact path="/howto"
            component={HowTo}
          />
          <Route
            exact path="/developers"
            component={Developers}
          />
          <Route
            component={NotFound}
          />
          
          {isAuthenticated && <LogoutButton />}
        </Switch>
      )}
    </div>
  );
}

export default App;
