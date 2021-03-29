import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../photos/AboutUs2.png";
import img2 from "../photos/HowTo2.png";
import img3 from "../photos/Developers2.png";
import "./style.css";
import { Link } from "react-router-dom";

function ProgInfo() {

    return (
        <Container >
            <Row style={{ marginTop: "45px" }}>
                <Col className="infoCol mb-5">
                    <Link to="/about">

                        <img
                            className="d-block w-100"
                            src={img}
                            alt="About Us"
                        />
                        
                    </Link>
                    
                    
                </Col>
                <Col className="infoCol mb-5" >
                    <Link to="/howto">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="How To"
                        />
                    </Link>
                </Col>

                <Col className="infoCol mb-5">
                    <Link to="/developers">
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Developers"
                    />
                    </Link>
                </Col>
            </Row>
        </Container >
    )
}

export default ProgInfo;