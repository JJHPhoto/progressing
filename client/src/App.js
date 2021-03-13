import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from "./pages/Start/Start";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import { useAuthTokenStore } from "./utils/auth";

function App() {

  return (
    <div className="App">
    
      <Router>
        <Switch>
            <Route exact path="/"><Start /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><SignUp /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;


