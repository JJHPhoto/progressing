import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
import "./style.css";

function MessageHalf({visible, toggleVisible}) {
        return (
      <Row>
        <Col xs={6} >
          <div className="notification-card">
            <Toast className="notification-toast" show={visible} onClose={() => toggleVisible(false)} delay={5000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Almost there!</strong>
              </Toast.Header>
              <Toast.Body>You are at least half way to reaching the end of your goal.</Toast.Body>
              <Toast.Body>Keep up the great work!</Toast.Body>
            </Toast>
          </div>
        </Col>
      </Row>
    );
}

export default MessageHalf;