import React from "react";
import { Login } from "../../components/Login";
import { SignUp } from "../../components/SignUp";
import { Header } from "../../components/Header";

function Start() {

    return (
        <>
        <Header />
        <Login />
        <SignUp />
        </>
    )
}

export default Start;