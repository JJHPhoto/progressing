// import { startSession } from "mongoose";
import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Header } from "../../components/Header/Header";
// import Login from "../../components/Login";
// import SignUp from "../../components/SignUp";


function Start () {

    return (
        <>
   
        <Header />
        <Button variant="link"><Link to="/login">Login</Link></Button>
        <Button variant="link"><Link to="/signup">Sign Up</Link></Button>
      
        </>
    )
}

export default Start;