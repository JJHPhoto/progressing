import { useRef } from "react";
import { StartHeader } from "../../components/StartHeader";
// import { ReturnToStart } from "../../components/Login/LoginForm";
import { useLogin } from "../../utils/auth";
import { Container } from "react-bootstrap";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await login({ email, password });

      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);
    }
  };

  return (
    <Container>
      <StartHeader />
      <form className="form-group" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input className="form-control" type="text" ref={emailRef} placeholder="Your email" />
        <br />
        <input className="form-control" type="password" ref={passwordRef} placeholder="Your password" />
        <br />
        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">Submit</button>
      </form>
      {/* <ReturnToStart /> */}
      </Container>
  );
}

export default Login;
