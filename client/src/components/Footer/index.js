import React from "react";
import { Col, Container, Row, } from "react-bootstrap";
import "./style.css";

function ProgFooter() {

    return (
        <Container className="container">
            <footer />
                <Row>
                    <Col>        
                        <p className="ftCol mb-0">
                            Progressing © 2021
                        </p>
                    </Col>
                </Row>
            <footer />
        </Container>
    )
}

export default ProgFooter;