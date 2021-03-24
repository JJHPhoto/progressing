import { useRef, useState } from "react";
import { useLogin } from "../../utils/auth";
import api from "../../utils/API";
import { StartHeader } from "../../components/StartHeader";
import { Container } from "react-bootstrap";
// import { ReturnToStart } from "../../components/Login/LoginForm";
import ErrorNotification from "../../components/ErrorNotification";
import ProgFooter from "../../components/Footer";
import ProgInfo from "../../components/StartInfo";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [errorMessage, setErrorMessage] = useState([]);
  const [visible, toggleVisible] = useState(false);
 
  console.log(errorMessage);

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    console.log(email, password);

    try {
      // Register the user.
      await api.register({ email, password, firstName, lastName });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password, firstName, lastName });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) {
        console.log(err.response.data);
        setErrorMessage(err.response.data)
        toggleNotification()
      } else {
        console.log(err);
      }
    }
  };

  const toggleNotification = () => {
    toggleVisible(!visible)
  }

  return (
    <Container>
      <StartHeader />
      <form className="form-group" onSubmit={handleSubmit}>
        <h2>Start your Journey</h2>
        <input
          className="form-control"
          type="text"
          ref={firstNameRef}
          placeholder="Your first name"
        />
        <br />
        <input
          className="form-control"
          type="text"
          ref={lastNameRef}
          placeholder="Your last name"
        />
        <br />
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
          style={{ float: "right"}}
          className="btn btn-success submitBtn mb-5"
        >
          Submit
        </button>
        <div> {visible ? <ErrorNotification visible={visible} toggleVisible={toggleVisible} errorMessage={errorMessage}/> : null} </div>
      </form>
     <ProgFooter />
    </Container>
  );
}

export default SignUp;
