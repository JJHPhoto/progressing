import React from "react";
import "./style.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StartHeader } from "../../components/StartHeader";

function Start() {
  return (
    <>
      <Container>
        <StartHeader />
        <div className="start-header mt-2 d-flex align-items-center flex-column ">
          <div className="start-buttons d-flex flex-column">
            <Button className="main-button mt-4" variant="success" size="lg">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Button>
            <Button className="main-button mt-4" variant="success" size="lg">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Start;
