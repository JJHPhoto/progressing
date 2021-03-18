/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import API from "../../utils/API";
import { useLogin } from "../../utils/auth";
// import { Button } from "react-bootstrap";
// import { Header } from "../../components/Header/Header";
// import { ReturnToStart } from "../../components/Login/LoginForm";
// import {
//   SignUpEmailInput,
//   SignUpFirstName,
//   SignUpLastName,
//   SignUpPageSubmit,
//   SignUpPasswordInput,
// } from "../../components/SignUp/SignUpForm";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email", email);
    console.log("password", password);

    try {
      // Register the user.
      await API.register({ email, password });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    
    } catch (err) {
      // Handle error responses from the API. This will include
      if( err.response && err.response.data ) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
                
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" ref={emailRef} placeholder="Your email" />
      <br />
      <input type="password" ref={passwordRef} placeholder="Your password" />
      <br />
      <button>Submit</button>
    </form>
    // <div className="container">
    //   <Header />
    //   <SignUpFirstName />
    //   <SignUpLastName />
    //   <SignUpEmailInput />
    //   <SignUpPasswordInput />
    //   <SignUpPageSubmit />
    //   <ReturnToStart />
    // </div>
  );
}

export default SignUp;
