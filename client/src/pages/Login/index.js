import { useRef, useState } from "react";
// import { StartHeader } from "../../components/StartHeader";
import { useLogin } from "../../utils/auth";
import { Container } from "react-bootstrap";
import ErrorNotification from "../../components/ErrorNotification";
import ProgFooter from "../../components/Footer";
import { Header } from "../../components/Header/Header";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errorMessage, setErrorMessage] = useState([]);
  const [visible, toggleVisible] = useState(false);

  console.log(errorMessage);

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
      if (err.response && err.response.data) setErrorMessage(err.response.data);
      toggleNotification();
      console.log(errorMessage);
    }
  };

  const toggleNotification = () => {
    toggleVisible(!visible);
  };

  return (
    <Container>
      {/* <StartHeader /> */}
      <Header />
      <form className="form-group mb-5" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          className="form-control"
          type="text"
          ref={emailRef}
          placeholder="Your email"
        />
        <br />
        <input
          className="form-control"
          type="password"
          ref={passwordRef}
          placeholder="Your password"
        />
        <br />
        <button
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-success submitBtn"
        >
          Submit
        </button>
        <div>
          {" "}
          {visible ? (
            <ErrorNotification
              visible={visible}
              toggleVisible={toggleVisible}
              errorMessage={errorMessage}
            />
          ) : null}{" "}
        </div>
      </form>
      <ProgFooter />
    </Container>
  );
}

export default Login;
