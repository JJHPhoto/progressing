import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoalImg from "../photos/SampleGoal.png"

function NoGoalsCard() {

    return (
        <Card className="mb-5" >          

            <Card.Header className="mb-3">
                <h1 style={{fontSize: "1.25rem"}}>
                    Welcome!  Lets get you started by creating your first goal, click the button below!
                </h1>

                <p>
                    Below is a representation of what your goal will look like when you are done.
                </p>
            </Card.Header>

             <Card.Img src={GoalImg} />

            <Button className="mt-5" style={{backgroundColor: "#01a35a", border: "none"}} >
                <Link className="text-white" to="/createGoal" >
                    <p >
                        Click Here to Make Your First Goal!
                    </p>
                </Link>
            </Button>


        </Card>

    );
}

export default NoGoalsCard;
