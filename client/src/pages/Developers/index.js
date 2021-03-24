import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgFooter from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

function Developers() {

    return (
        
        <Container >
            <NavBar />
            <Header />

            <h1>Developers</h1>
            <Row >
                <Col className="devCard">
                    <Card >
                        <Card.Body>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/69598784?s=460&u=7c00921c6bc2321d43dadd9eb70fe9938d076a01&v=4" />
                            <Card.Title>Ian Fleshman-Cooper</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full-Stack WebDeveloper</Card.Subtitle>
                            <Card.Text>
                            Developer with a BA in Mathematics & IT from Northwest University, and a Certificate from the University of Washington- Professional and Continuing Education
                            </Card.Text>
                            <Card.Link target="blank" href="https://github.com/Ianaac27">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
 
                <Col className="devCard"> 
                    <Card >
                        <Card.Body>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/70823060?s=460&u=75baa87a349335c21c584b0f769e8692504d6da8&v=4" />
                            <Card.Title>Joshua J Haller</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full-Stack WebDeveloper</Card.Subtitle>
                            <Card.Text>
                            As a self-taught photographer, I always had an interest in tech. Coding in particular. My hope is to build a career that blends my past with what I'm learning.
                            </Card.Text>
                            <Card.Link target="blank" href="https://github.com/JJHPhoto">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>                
                <Col className="devCard">
                    <Card >
                        <Card.Body>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/71116187?s=460&u=dc65020eb68ec0a5080a7166b23092555bd4c698&v=4" />
                            <Card.Title>Bryson Palmer</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full-Stack WebDeveloper</Card.Subtitle>
                            <Card.Text>
                            I am a husband, father, jiujiteiro, musician, and now a student. I have been a stay-at-home dad for nine years and now I'm transitioning into web development.
                            </Card.Text>
                            <Card.Link target="blank" href="https://github.com/Bryson-Palmer">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="devCard">
                    <Card >
                        <Card.Body>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/71612026?s=460&v=4" />
                            <Card.Title>Ilya Libershteyn</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full-Stack WebDeveloper</Card.Subtitle>
                            <Card.Text>
                            Back-end guru.
                            </Card.Text>
                            <Card.Link target="blank" href="https://github.com/ilya-libershteyn">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="devCard">
                    <Card >
                        <Card.Body>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/71522049?s=460&u=74cd937a94ae684167550fc83dab4db771f251c7&v=4" />
                            <Card.Title>Thomas Kading</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full-Stack WebDeveloper</Card.Subtitle>
                            <Card.Text>
                            Current web developer with a background in environmental science.
                            </Card.Text>
                            <Card.Link target="blank" href="https://github.com/Tskading">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <ProgFooter />
        </Container>
        
    )
}

export default Developers;