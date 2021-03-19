import React from "react";
// import "./main.sass";
// import "bootstrap/scss/bootstrap.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
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
        <Router>
          <Switch>
            <GuestRoute redirectTo="/home" exact path="/" component={Start} />
            <GuestRoute redirectTo="/home" path="/login" component={Login} />
            <GuestRoute redirectTo="/home" path="/signup" component={SignUp} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/goal" component={Goal} />
            <PrivateRoute path="/creategoal" component={CreateGoal} />
            <Route component={NotFound} />
            {isAuthenticated && <LogoutButton />}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
