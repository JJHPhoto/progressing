import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";


function NoGoalsCard() {

    return (
        <Card className="mb-5" >          

            <Card.Header className="ngHeader mb-1 p-4">
                <div className="">
                <h1 className="noGoalHeader" style={{fontSize: "1.1rem"}}>
                    Lets get you started by creating your first goal, click the button below!
                </h1>
                </div>
            </Card.Header>
            <Card.Body>

                <Row >
                    <ul className="noGoal ml-4 mx-4 font-weight-light"> 
                    Remember you're S.M.A.R.T - specific, measurable, attainable, relevant, time-bound! 
                    </ul>

                    <ul className="noGoal ml-4 mx-4 font-weight-light">

                        As your creating your goal, think of the milestones you will check off to complete it.  This gives you a way to break your goal down into managable, actionable pieces.

                    </ul>

                    <br>
                    </br>

                    <ul className="noGoal ml-4 mx-4 font-weight-light">
                        We will guide you through the process, its easy!  Click below and see how you will thrive in Progressing.
                    </ul>



                </Row>

                <Button className="noGoalsButton mt-5" style={{backgroundColor: "#01a35a", border: "none", float: "right"}} >
                <Link className="text-white" to="/createGoal" >
                    <p className="mt-3" >
                        Click Here to Make Your First Goal!
                    </p>
                </Link>
            </Button>

            </Card.Body>

           


        </Card>

    );
}

export default NoGoalsCard;
