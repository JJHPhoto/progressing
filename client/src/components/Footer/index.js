import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

function ProgFooter() {
  return (
    <Container className="container">
      <footer />
      <Row>
        {/* <Col> */}
        <p className="ftCol mt-2 mb-2">Progressing © 2021</p>
        {/* </Col> */}
      </Row>
      <footer />
    </Container>
  );
}

export default ProgFooter;
