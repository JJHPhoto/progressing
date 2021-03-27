import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
import "./style.css";

function MessageFull({visible, toggleVisible}) {
        return (
      <Row>
        <Col xs={6} >
          <div className="notification-card">
            <Toast className="notification-toast" show={visible} onClose={() => toggleVisible(false)} delay={10000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Congratulations!</strong>
              </Toast.Header>
              <Toast.Body>You have achieved your goal!</Toast.Body>
              <Toast.Body>You have earned an accomplishment badge!</Toast.Body>
            </Toast>
          </div>
        </Col>
      </Row>
    );
}

export default MessageFull;