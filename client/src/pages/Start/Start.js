import React from "react";
import "./style.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { StartHeader } from "../../components/StartHeader";
import ProgFooter from "../../components/Footer";
import ProgInfo from "../../components/StartInfo";
import { Header } from "../../components/Header/Header";

function Start() {
  return (
    <>
      <Container>
        {/* <StartHeader /> */}
        <Header />

        <div className="start-header mb-4 d-flex justify-content-center flex-row ">
          {/* <div className="start-buttons d-flex flex-column"> */}
          <Button
            className="main-button mt-4"
            style={{ width: "120px", margin: "10px" }}
            variant="success"
            size="lg"
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </Button>
          <Button
            className="main-button mt-4"
            style={{ width: "120px", margin: "10px" }}
            variant="success"
            size="lg"
          >
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </Button>
        </div>

        <h1 className="text-center" style={{ marginTop: "40px" }}>
          Your Goals, Your Milestones
        </h1>

        <ProgInfo />
        <ProgFooter />
      </Container>
    </>
  );
}

export default Start;
