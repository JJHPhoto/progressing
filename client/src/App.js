import React from "react";
// import "./main.sass";
// import "bootstrap/scss/bootstrap.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start/Start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Landing";
import Goal from "./pages/Goal";
import CreateGoal from "./pages/CreateGoal";
import NotFound from "./pages/NotFound/NotFound";
import { useAuthTokenStore } from "./utils/auth";

function App() {
  useAuthTokenStore();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/goal" component={Goal} />
          <Route path="/creategoal" component={CreateGoal} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
