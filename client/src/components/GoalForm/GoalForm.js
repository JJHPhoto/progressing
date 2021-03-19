import React from "react";
import { Dropdown } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";


export function GoalTitle(props) {
    return (

        <div className="form-group goalTitle">
            Name your goal
            <input
                value={props.title}
                onChange={props.handleInputChange}
                name="title"
                className="form-control"
                placeholder="Goal Title (required)"
                {...props}
            />
        </div>

    );
}

export function GoalDescription(props) {
    return (
        <div className="form-group goalDescription">
            Describe your goal
            <textarea
                value={props.description}
                onChange={props.handleInputChange}
                name="description"
                className="form-control"
                placeholder="Description (required)"
                rows="5"
                {...props} />
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
                <Dropdown.Item
                    value="time"
                    eventKey={props.goalType}
                    name="goalType"
                    onClick={props.handleInputChange}
                    id="time"
                    as="button">
                    Time
                    </Dropdown.Item>
                <Dropdown.Item
                    value="event"
                    eventKey={props.goalType}
                    name="goalType"
                    onClick={props.handleInputChange}
                    id="event"
                    as="button">
                    Event
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalEndDate(props) {
    return (
        <div className="form-group goalEndDate">
            Completion Date
            <input
                value={props.endDate}
                onChange={props.handleInputChange}
                name="endDate"
                className="form-control"
                placeholder="03/18/2021"
                {...props}
            />
        </div>
    );
}

export function GoalMilestones(props) {
    return (
        <div className="form-group goalMilestones">
            Milestone
            <input
                value={props.milestones}
                onChange={props.handleInputChange}
                name="milestones"
                className="form-control"
                placeholder="Name this milestone"
                {...props}
            />
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
                <Dropdown.Item 
                    value={true}
                    name="actionItems?"
                    onClick={props.handleInputChange}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    name="actionItems?"
                    onClick={props.handleInputChange}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalActionItem(props) {
    return (
        <div className="form-group goalActionItem">
            Action Item
            <input 
                value={props.actionItems}
                onChange={props.handleInputChange}
                name="actionItems"
                className="form-control"
                placeholder="Name this action Item" 
                {...props} 
            />
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
                <Dropdown.Item 
                    value={true}
                    name="moreActionItems?"
                    onClick={props.handleInputChange}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    name="moreActionItems?"
                    onClick={props.handleInputChange}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
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
                <Dropdown.Item 
                    value={true}
                    name="moreMilestones?"
                    onClick={props.handleInputChange}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    name="moreMilestones?"
                    onClick={props.handleInputChange}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function DoneButton(props) {
    return (
        <button {...props} onClick={props.handleDoneButton} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
            {props.children}
                Done
        </button>
    )
}

export function Summary({ newGoalState }) {
    return(

        // What to do with the summary page.
        <div className="form-group goalSummary">
            Here is your goal summary
            <p>Goal Title: {newGoalState.title}</p>
            <p>Goal Description: {newGoalState.description}</p>
            <p>Goal Type: {newGoalState.goalType}</p>
            <p>End Date: {newGoalState.endDate}</p>
            <p>Milestones: {newGoalState.milestones}</p>
            <p>Action Items: {newGoalState.actionItems}</p>
        </div>

    );
}

export function SubmitGoal(props) {
    return (
        <button {...props} onClick={props.handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
            {props.children}
                Submit New Goal
        </button>
    );
}