import React from "react";
import {Dropdown} from "react-bootstrap";
import "./style.css";


export function GoalTitle(props) {
    return(

        <div className="form-group goalTitle">
            Name your goal
            <input className="form-control" placeholder="Goal Title (required)" {...props} />
        </div>
            
    );
}

export function GoalDescription(props) {
    return (
    <div className="form-group goalDescription">
        Describe your goal
        <textarea className="form-control" placeholder="Description (required)" rows="5" {...props} />
    </div>
    );

}

export function GoalTypeDropdown(props) {
    return (
        <Dropdown>
                Is your goal time based or event based?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Goal Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item id="time" as="button">Time</Dropdown.Item>
                    <Dropdown.Item id="event" as="button">Event</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export function GoalEndDate(props) {
    return (
        <div className="form-group goalEndDate">
            Completion Date
            <input className="form-control" placeholder="When would you like to complete this goal?" {...props} />
        </div>
    );
}          

export function GoalMilestones(props) {
    return (
        <div className="form-group goalMilestones">
            Milestone
            <input className="form-control" placeholder="Name this milestone" {...props} />
        </div>
    );
}          

export function ActionItemDropdown(props) {
    return (
        <Dropdown>
                Do you want to break your milstone in to action items?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Action Item?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item id="time" as="button">Yes</Dropdown.Item>
                    <Dropdown.Item id="event" as="button">No</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export function GoalActionItem(props) {
    return (
        <div className="form-group goalActionItem">
            Action Item
            <input className="form-control" placeholder="Name this action Item" {...props} />
        </div>
    );
}   

export function AnotherActionItemDropdown(props) {
    return (
        <Dropdown>
                Do you want to add another action item to this mileston?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Action Item?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item id="time" as="button">Yes</Dropdown.Item>
                    <Dropdown.Item id="event" as="button">No</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export function AnotherMilestoneDropdown(props) {
    return (
        <Dropdown>
                Do you want to add another milestone to your goal?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Milestone?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item id="time" as="button">Yes</Dropdown.Item>
                    <Dropdown.Item id="event" as="button">No</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

// export function GoalNotes (props) {

//     return (
//         <div className="form-group goalNotes">
//             Leave notes for yourself here!
//             <textarea className="form-control" placeholder="This is where you should leave yourself personal notes about your goal..." rows="10" {...props} />
//         </div>
//     );
// }          

export function SubmitGoal (props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}
                Submit New Goal
        </button>
    );
}

// export function Summary(props) {
//     return(

//         <div className="form-group goalSummary">
//             Here is your goal summary
//             <p>Goal Title: {props.title}</p>
//             <textarea>Goal Title: {props.description}</textarea>
//             <p>Goal Type: {props.goalType}</p>
//             <p>End Date: {props.endDate}</p>
//             <p>Milestones: {props.milestones.name}</p>
//             <p>Action Items: {props.actionItems.name}</p>
//         </div>
            
//     );
// }