import React from "react";
// import "./main.sass";
// import "bootstrap/scss/bootstrap.scss";
import { Route, Switch } from "react-router-dom";
import Start from "./pages/Start/Start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Goal from "./pages/Goal";
import CreateGoal from "./pages/CreateGoal";
import LogoutButton from "./components/LogoutButton";
import NotFound from "./pages/NotFound/NotFound";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import GuestRoute from "./components/GuestRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useAuthTokenStore();

  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App">
      
        <Switch>
          <GuestRoute redirectTo="/home" exact path="/" component={Start} />
          <GuestRoute redirectTo="/home" exact path="/login" component={Login} />
          <GuestRoute redirectTo="/home" exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/goal" component={Goal} />
          <PrivateRoute exact path="/creategoal" component={CreateGoal} />
          <Route component={NotFound} />
          {isAuthenticated && <LogoutButton />}
        </Switch>

    </div>
  );
}

export default App;
