import React from "react";
import {Card, Form } from "react-bootstrap";
import "./style.css";
import goalAPI from "../../utils/goalApi";
import API from "../../utils/API";
import {useAuthenticatedUser} from "../../utils/auth";


function Notes({chartGoal, setGoals}) {

    const user = useAuthenticatedUser();

      const loadGoals = (req, res) => {
        API
        .lookup(req)
        .then((res) => {
          setGoals(res.data.goalsSet);
        })
        .catch((err) => console.log(err));
      };

      const handleNoteValue = (value) => {
        goalAPI.updateNote(chartGoal._id, { 
            notes: value.target.value
        })
        .then(res => 
            
            loadGoals(user._id)
    )

      }

    return (

        <Card>
            <Card.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{chartGoal.title} Notes</Form.Label>

                        <Form.Control onChange={(value) => handleNoteValue(value)} defaultValue={chartGoal.notes} className="glowing-border" as="textarea" rows={3}/>

                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Notes;