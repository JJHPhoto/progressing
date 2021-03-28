import React, {useState} from "react";
import { Button, Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./style.css";
import goalAPI from "../../utils/goalApi";
import API from "../../utils/API";
import {useAuthenticatedUser} from "../../utils/auth";


function Notes({chartGoal, setGoals}) {

    // const [noteValue, setNoteValue] = useState("");

    const user = useAuthenticatedUser();

      const loadGoals = (req, res) => {
        API
        .lookup(req)
        .then((res) => {
          setGoals(res.data.goalsSet);
          console.log("Home Page: res.data", res.data);
        })
        .catch((err) => console.log(err));
      };

      console.log(chartGoal.notes)

      const handleNoteValue = (value) => {
            // console.log(value.target.value);
        // setNoteValue(value.target.value) ;
        goalAPI.updateNote(chartGoal._id, {
                
            notes: value.target.value
        })
        .then(res => 
            
            loadGoals(user._id)
    )

      }

    // const updateStep = (e) => {
    //     e.preventDefault();
    //         goalAPI.updateNote(chartGoal._id, {
                
    //             notes: noteValue
    //         })
    //         .then(res => 
                
    //             loadGoals(user._id)
    //     )
    // };

    return (

        <Card>
            <Card.Body>
                <Form>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Goal Notes</Form.Label>

                        <Form.Control onChange={(value) => handleNoteValue(value)} defaultValue={chartGoal.notes} className="glowing-border" as="textarea" rows={3}/>

                    </Form.Group>

                </Form>

                {/* <Button onClick={e => updateStep(e)}  variant="success" style={{ float: "right"}}>

                        <Link className="text-white" >
                            Update Notes
                        </Link>
                    
                </Button> */}

            </Card.Body>



        </Card>


    )
}

export default Notes;