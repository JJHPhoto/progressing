import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
import "./style.css";

function ErrorNotification({errorMessage, visible, toggleVisible}) {
        return (
      <Row>
        <Col xs={6} >
          {/* <div className="notification-card"> */}
            <Toast show={visible} onClose={() => toggleVisible(false)} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">ERROR</strong>
              </Toast.Header>
              <Toast.Body>{errorMessage.email} {errorMessage.default}</Toast.Body>
              <Toast.Body>{errorMessage.password}</Toast.Body>
            </Toast>
          {/* </div> */}
        </Col>
      </Row>
    );
}

export default ErrorNotification;