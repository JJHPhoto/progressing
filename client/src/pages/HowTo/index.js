import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgFooter from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

function HowTo() {

    return (

        <Container >
            <NavBar />
            <Header />

            <Card className="mt-4" >
                <Card.Header style={{backgroundColor: "#01a35a"}}>
                    <h1 className="text-center text-white" style={{fontSize: "1.25rem"}}>How to Use Progressing</h1>
                </Card.Header>
            <Row>
                <Col className="mt-4">
                    <ol className="list mb-3">
                        1. Login or Sign Up: 

                            <p className="ml-4 mx-4 font-weight-light">
                                This part is easy!  Just click on the appropriate button and fill in the required fields, and boom, you will join the Progressing community.  Once you've logged in you will be directed to your home page.  Here you will see all of your current goals, update specific goals, and create new ones.  
                            </p>

                        2. Create a Goal:

                            <p className="ml-4 mx-4 font-weight-light">
                                Now its time for the big time, your first goal on Progressing!  Click the Create Goal button and you will encounter our goal creation walkthrough.
                            </p>

                        3. Name and Describe Your Goal:

                            <p className="ml-4 mx-4 font-weight-light">
                                Remember you're S.M.A.R.T!  It is time to get specific, here you will name your goal and give yourself a description.  Be specific here, any extra tidbits you want to remind yourself about can go into your notes section later!
                            </p>

                        4. Choosing a Time or Action Based Completion Type:

                            <p className="ml-4 mx-4 font-weight-light">
                                This is your chance to work in a time-bound aspect of your goal.  Is your goal something you want to achieve my a specific date, or is it complete upon an milestone?  Either is fine with us, pick what is best for you.  
                            </p>
                    </ol>
                </Col>
                <Col className="mt-4">
                <ol className="list mb-3">
                        5. Milestones: 

                            <p className="ml-4 mx-4 font-weight-light">
                                Milestones are the major steps in your Progressing goal, this is how we are going to measure your progress!  What are the measurable aspects of your goal?  You may only have one, maybe you have five, or fifty!  You can even add action items within Milestones, as you will see below.
                            </p>

                        6. Action Items:

                            <p className="ml-4 mx-4 font-weight-light">
                                Action Items are a subset of Milestones - these are the micro-goals you need to complete to reach your main goal.  We provide this section so that you can really break down more complicated tasks into as many digestable parts as necessary.
                            </p>

                        7. Submit Your Goal:

                            <p className="ml-4 mx-4 font-weight-light">
                                You did it, you created your first goal, upon submitting your goal you will land on your home page where you can start toggling pieces as complete!
                            </p>

                        8. Additional Features:

                            <p className="ml-4 mx-4 font-weight-light">
                                 From your home page, you can select any of your active goals, and then be taken to a goal page where you can update and complete Action Items, Milestiones, and eventually, your Progressing Goal! Checkout our <Link to="/developers">Developers</Link>{" "} page to see more projects from our team!
                            </p>
                    </ol>
                </Col>
            </Row>
            </Card>

            <Card className="my-5">
                <Card.Header style={{backgroundColor: "#01a35a"}}>
                    <h1 className="text-center text-white" style={{fontSize: "1.25rem"}}>S.M.A.R.T. Goal Setting</h1>
                </Card.Header>
            <Row className="smart ml-3">
                <h5>Specific</h5>
                    
                    <p className="ml-4 mx-4 font-weight-light">
                        Be specific!  This is your chance to really start your Progressing journey.  The idea behind this is simple enough, what do you want to specifically achieve?  But, when you are creating your goal title, take a moment to think about what it is you are really looking to achieve.  For example, 'I want to eat more responsibly' sounds like a great goal to take on, but, to get the most out of Progressing, you're going to need to be more specific.  How about, 'I want to include fruits and vegetables at each meal today'?  This gives us something specific and attainable to work towards.
                    </p>    
            </Row>

            <Row className="smart ml-3">
                <h5>Measurable</h5>
                    
                    <p className="ml-4 mx-4 font-weight-light">
                        By picking something to progress towards, think about how you are going to measure your success.  This could come in different forms, but for our sake, we are going to use 'yes/no' boolean operators here to gauge your milestones and action items.  So, 'Did I include fruit and veggies with breakfast this morning?', quantifiable, simple, a measurable step tallied towards your goal.
                    </p>    
            </Row>

            <Row className="smart ml-3">
                <h5>Attainable</h5>
                    
                    <p className="ml-4 mx-4 font-weight-light">
                        Is your goal realistic?  Remember, that each of us is different, and this is where it is important to trust yourself.  To continue the above example, if we had set our goal as fruits and veggies for each meal every day for a month straight, that might be considered a stretch goal.  This would be a goal that will be difficult to achieve - which can be good - but know yourself, if you don't eat fruit and veggies at every meal as is, it may be more realistic to pick a day or a week to start, and move on from there.
                    </p>    
            </Row>

            <Row className="smart ml-3">
                <h5>Relevant</h5>
                    
                    <p className="ml-4 mx-4 font-weight-light">
                        We at Progressing love this item - why is the goal relevant to you?  This can be the difference between a goal getting completed and it falling by the wayside.  Take a moment to really understand why this goal is important - often, a personal connection to a goal can be the most powerful motivation when you are challenged.  Remember why you are doing this, and keep that close to you as you move to progress.
                    </p>    
            </Row>

            <Row className="smart ml-3 mb-5">
                <h5>Time-bound</h5>
                    
                    <p className="ml-4 mx-4 font-weight-light">
                        We are all here because we want to move forward as people, family members, and/or employees, which means we probably have some sort of timeframe we wish to achieve our goal by.  At Progressing, we have the ability to set a completion date, or you can move forward with actionable items.  If you choose to not pick a date - add a soft date in your notes section that will remind you when you want to be complete.
                    </p>    
            </Row>
            </Card>

            <ProgFooter />
        </Container>
    )
}

export default HowTo;