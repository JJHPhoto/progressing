import React from "react";
import { Dropdown } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";


export function GoalTitle({ inputValue, onInputChange }) {
    return (
        <div className="form-group goalTitle">
            Name your goal
            <input
                // value={inputValue}
                onChange={onInputChange}
                name="title"
                className="form-control"
                placeholder="Goal Title (required)"
            />
        </div>

    );
}

export function GoalDescription({ inputValue, onInputChange }) {
    return (
        <div className="form-group goalDescription">
            Describe your goal
            <textarea
                // value={inputValue}
                onChange={onInputChange}
                name="description"
                className="form-control"
                placeholder="Description (required)"
                rows="5"
            />
        </div>
    );

}

export function GoalTypeDropdown({ inputValue, onClick }) {
    return (
        <Dropdown>
            Is your goal time based or event based?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Goal Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value="time"
                    eventKey={inputValue}
                    name="goalType"
                    onClick={onClick}
                    id="time"
                    as="button">
                    Time
                </Dropdown.Item>
                <Dropdown.Item
                    value="event"
                    eventKey={inputValue}
                    name="goalType"
                    onClick={onClick}
                    id="event"
                    as="button">
                    Event
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalEndDate({ inputValue, onInputChange }) {
    return (
        <div className="form-group goalEndDate">
            Completion Date
            <input
                // value={inputValue}
                onChange={onInputChange}
                name="endDate"
                className="form-control"
                placeholder="03/18/2021"
            />
        </div>
    );
}

export function GoalMilestones({ inputValue, onInputChange }) {
    return (
        <div className="form-group goalMilestones">
            
                Milestone
                <input
                    // value={inputValue}
                    onChange={onInputChange}
                    name="milestones"
                    className="form-control"
                    placeholder="Name this milestone"
                />
        </div>
    );
}

export function ActionItemDropdown({ inputValue, onClick }) {
    return (
        <Dropdown>
            Do you want to break your milstone in to action items?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Action Item?
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item 
                    value={true}
                    eventKey={inputValue}
                    name="actionItems?"
                    onClick={onClick}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    eventKey={inputValue}
                    name="actionItems?"
                    onClick={onClick}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalActionItem({ inputValue, onInputChange }) {
    return (
        <div className="form-group goalActionItem">
            Action Item
            <input 
                // value={inputValue}
                onChange={onInputChange}
                name="actionItems"
                className="form-control"
                placeholder="Name this action Item" 
            />
        </div>
    );
}

export function AnotherActionItemDropdown({ inputValue, onClick }) {
    return (
        <Dropdown>
            Do you want to add another action item to this mileston?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Action Item?
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item 
                    value={true}
                    eventKey={inputValue}
                    name="moreActionItems?"
                    onClick={onClick}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    eventKey={inputValue}
                    name="moreActionItems?"
                    onClick={onClick}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function AnotherMilestoneDropdown({ inputValue, onClick }) {
    return (
        <Dropdown>
            Do you want to add another milestone to your goal?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Milestone?
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item 
                    value={true}
                    eventKey={inputValue}
                    name="moreMilestones?"
                    onClick={onClick}
                    id="Yes" 
                    as="button">
                        Yes
                </Dropdown.Item>
                <Dropdown.Item 
                    value={false}
                    eventKey={inputValue}
                    name="moreMilestones?"
                    onClick={onClick}
                    id="No" 
                    as="button">
                        No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function DoneButton({ inputValue, onClick }) {
    return (
        <button
            type="button"
            // value={inputValue}
            onClick={onClick} 
            style={{ float: "right", marginBottom: 10 }} 
            className="btn btn-success submitBtn">
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

export function SubmitGoal({ inputValue, onClick }) {
    return (
        <button
            type="button"
            // value={inputValue}
            onClick={onClick} 
            style={{ float: "right", marginBottom: 10 }} 
            className="btn btn-success submitBtn">
                Submit New Goal
        </button>
    );
}