import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgFooter from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
// import Img from "../../components/photos/SquaresRight.png"
// import Img2 from "../../components/photos/SquaresLeft.png"

function About() {
  return (
    <div>
      <Container>
        <NavBar />
        <Header />

        <Row className="flex-wrap ">
          {/* <Col > */}
          <Card className="aboutCard mt-5 mb-5">
            <Card.Header style={{ backgroundColor: "#01a35a", fontSize: "1.25rem" }}>
              <h1 className="text-center text-white">About</h1>
            </Card.Header>
            <p className="text-left mx-5 mt-4 font-weight-light">
              You are here because you care. You care about always moving
              forward, always growing, always progressing. Progressing was built
              and designed by like minded individuals. Having a way to manage
              and track your personal growth is more important than ever, given
              the fast paced world in which we all live. We are always looking
              for ways to continually improve ourselves. We built Progressing
              because we wanted a way to not only track our goals, but a way to
              break a substantial goal into smaller actionable pieces. We did
              not design Progressing to be your daily 'drink three cups of
              water' goal app. We are here because we are looking to better
              ourselves, and these types of ambitions make defining and tracking
              your goals more difficult. This is where we step in, we strongly
              believe in the S.M.A.R.T (specific, measurable, attainable,
              relevant, time-bound) acronym in terms of building out your goals.
              Head over to the <Link to="/howto">How to Use Progressing</Link>{" "}
              page to learn more!
            </p>
          </Card>
          {/* </Col> */}

          {/* <Col  className=" img mt-0 mb-5">
                    <img
                        className="d-block w-100"
                        src={Img}
                        alt="First slide"
                    />         
                </Col> */}
        </Row>
        {/* <h1 className="text-right">Progressing</h1>
            <Row >
 
                <Col className="img mt-0 mb-5"> */}

        {/* </Col>
 
                <Col >
                    <p className="text-right font-weight-light mt-5 mb-0">
                    By utilizing the Progressing application, you will be able to create your own goals - each with unique Milestones and Action Items that will help you break your larger goals into smaller pieces.  By letting us guide you through the goal creation process, we will give you a clear and concise vision of the things you want to accomplish to meet your goal.
                    </p>
                </Col>
            </Row> */}
            <ProgFooter />
      </Container>
    </div>
  );
}

export default About;
