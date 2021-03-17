import React from "react";
// import "./main.sass";
// import "bootstrap/scss/bootstrap.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Start from "./pages/Start/Start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Landing";
import Goal from "./pages/Goal";
import CreateGoal from "./pages/CreateGoal";
import NotFound from "./pages/NotFound/NotFound";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import { Header } from "./components/Header/Header";
import RegistrationForm from "./components/RegistartionForm";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

function App() {
  useAuthTokenStore();

  // const isAuthenticated = useIsAuthenticated;

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Header />
    //     <div>
    //       {isAuthenticated && <RegistrationForm />}
    //       {!isAuthenticated && <LoginForm />}
    //       {!isAuthenticated && <LogoutButton />}
    //     </div>
    //   </div>
    // </BrowserRouter>

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
