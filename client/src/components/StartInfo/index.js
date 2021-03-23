import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../photos/AboutUs2.png";
import img2 from "../photos/HowTo2.png";
import img3 from "../photos/Developers2.png";
import "./style.css";

function ProgInfo() {

    return (
        <Container >
            <Row>
                <Col className="infoCol mb-5">
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="About Us"
                    />
                    
                </Col>
                <Col className="infoCol mb-5" >
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="About Us"
                    />
                </Col>

                <Col className="infoCol mb-5">
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="About Us"
                    />
                </Col>
            </Row>
        </Container >
    )
}

export default ProgInfo;