import React from "react";
import { Dropdown } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";


export function GoalTitle({ onInputChange }) {
    return (
        <div className="form-group goalTitle">
            Name your goal
            <input
                onChange={onInputChange}
                name="title"
                className="form-control"
                placeholder="Goal Title (required)"
            />
        </div>

    );
}

export function GoalDescription({ onInputChange }) {
    return (
        <div className="form-group goalDescription">
            Describe your goal
            <textarea
                onChange={onInputChange}
                name="description"
                className="form-control"
                placeholder="Description (required)"
                rows="5"
            />
        </div>
    );

}

export function GoalTypeDropdown({ onClick }) {
    return (
        <Dropdown>
            Is your goal time based or event based?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Goal Type
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value="time"
                    name="goalType"
                    onClick={onClick}
                    id="time"
                    as="button">
                    Time
                </Dropdown.Item>
                <Dropdown.Item
                    value="event"
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

export function GoalEndDate({ onInputChange }) {
    return (
        <div className="form-group goalEndDate">
            Completion Date
            <input
                onChange={onInputChange}
                name="endDate"
                className="form-control"
                placeholder="03/18/2021"
            />
        </div>
    );
}

export function GoalMilestones({ onInputChange }) {
    return (
        <div className="form-group goalMilestones">
            Milestone
            <input
                onChange={onInputChange}
                name="milestones"
                className="form-control"
                placeholder="Name this milestone"
            />
            {/* <button
                type="button"
                onSubmit={onSubmit}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn">
                Submit Milestone
            </button> */}
        </div>
    );
}

export function ActionItemDropdown({ onClick }) {
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
                    onClick={onClick}
                    id="Yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
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

export function GoalActionItem({ onInputChange }) {
    return (
        <div className="form-group goalActionItem">
            Action Item
            <input
                onChange={onInputChange}
                name="actionItems"
                className="form-control"
                placeholder="Name this action Item"
            />
        </div>
    );
}

export function AnotherActionItemDropdown({ onClick }) {
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
                    onClick={onClick}
                    id="Yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
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

export function AnotherMilestoneDropdown({ onClick }) {
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
                    onClick={onClick}
                    id="Yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
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

export function DoneButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ float: "right", marginBottom: 10 }}
            className="btn btn-success submitBtn">
            Done
        </button>
    )
}

export function Summary({ newGoalState }) {
    return (

        // What to do with the summary page.
        <div className="form-group goalSummary">
            Here is your goal summary
            <p>Goal Title: {newGoalState.title}</p>
            <p>Goal Description: {newGoalState.description}</p>
            <p>Goal Type: {newGoalState.goalType}</p>
            <p>End Date: {newGoalState.endDate}</p>
            <p>Milestones: {newGoalState.milestones}</p>
            {/* <p>Action Items: {newGoalState.actionItems}</p> */}
        </div>

    );
}

export function SubmitGoal({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ float: "right", marginBottom: 10 }}
            className="btn btn-success submitBtn">
            Submit New Goal
        </button>
    );
}