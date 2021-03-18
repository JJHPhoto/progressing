import React from "react";
import {Dropdown} from "react-bootstrap";
import "./style.css";


export function GoalTitle(props) {

    return(

        <div className="form-group goalTitle">
            This is where you should name your goal!
            <input className="form-control" placeholder="Goal Title (required)" {...props} />
        </div>
            
    );
}

export function GoalDescription(props) {

    return (
    <div className="form-group goalDescription">
        Describe the goal for yourself here!
        <textarea className="form-control" placeholder="Description (required)" rows="5" {...props} />
    </div>
    );

}

export function GoalTypeDropdown(props) {
    return (
        <Dropdown>
                Will you achieve your goal by a certain date or a certain action?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Goal Type:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="button">Timed</Dropdown.Item>
                    <Dropdown.Item as="button">Event</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export function GoalNotes (props) {

    return (
        <div className="form-group goalNotes">
            Leave notes for yourself here!
            <textarea className="form-control" placeholder="This is where you should leave yourself personal notes about your goal..." rows="10" {...props} />
        </div>
    );
}          

export function SubmitGoal (props) {

    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}
                Submit New Goal
        </button>
    );
}            