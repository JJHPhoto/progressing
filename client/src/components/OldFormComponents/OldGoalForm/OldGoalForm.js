// Old Goal Form component
// Exporting all the functional questions
// Includes the logic for action items and conditional questions

/* eslint-disable no-sequences */
import React from "react";
import { Dropdown } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";


export function GoalTitle({ onInputChange, onClick }) {
    return (
        <div
            className="form-group goalTitle">
                Name your goal
            <input
                onChange={onInputChange}
                name="title"
                className="form-control"
                placeholder="Goal Title (required)"
            />

            <button
                type="button"
                onClick={onClick}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Save
            </button>
        </div>
    );
}

export function GoalDescription({ onInputChange, onClick }) {
    return (
        <div
            className="form-group goalDescription">
                Describe your goal
            <textarea
                onChange={onInputChange}
                name="description"
                className="form-control"
                placeholder="Description (required)"
                rows="5"
            />

            <button
                type="button"
                onClick={onClick}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Save
            </button>
        </div>
    );
}

export function GoalMilestones({ onInputChange, onClick }) {
    return (
        <div className="form-group goalMilestones">
            <label>
                Milestone
                <input
                    onChange={onInputChange}
                    type="text"
                    name="steps"
                    className="form-control"
                    placeholder="Name this step"
                />
            </label>
            <button
                type="button"
                onClick={onClick}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Save
            </button>
        </div>
    );
}

export function ActionItemDropdown({ onClick }) {
    return (
        <Dropdown>
            Do you want to break your milstone in to action items?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Action Item
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value={true}
                    name="actionItem"
                    onClick={onClick}
                    id="yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
                    name="actionItem"
                    onClick={onClick}
                    id="no"
                    as="button">
                    No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalActionItem({ onInputChange, onClick }) {
    return (
        <div className="form-group goalActionItem">
            <label>
                Action Item
                <input
                    onChange={onInputChange}
                    type="text"
                    name="stepsChildren"
                    className="form-control"
                    placeholder="Name this action Item"
                />
            </label>
            <button
                type="button"
                onClick={onClick}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Save
            </button>
        </div>
    );
}

export function AnotherActionItemDropdown({ onClick }) {
    return (
        <Dropdown>
            Do you want to add another action item to this milestone?
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Action Item
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value={true}
                    name="anotherActionItem"
                    onClick={onClick}
                    id="yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
                    name="anotherActionItem"
                    onClick={onClick}
                    id="no"
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
                Milestone
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value={true}
                    name="anotherMilestone"
                    onClick={onClick}
                    id="yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
                    name="anotherMilestone"
                    onClick={onClick}
                    id="no"
                    as="button">
                    No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalTypeDropdown({ onClick }) {
    return (
        <Dropdown>
            Is your goal time based?
            <Dropdown.Toggle 
                variant="success" 
                id="dropdown-basic">
                Answer
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    value={true}
                    name="goalType"
                    onClick={onClick}
                    id="yes"
                    as="button">
                    Yes
                </Dropdown.Item>
                <Dropdown.Item
                    value={false}
                    name="goalType"
                    onClick={onClick}
                    id="no"
                    as="button">
                    No
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function GoalEndDate({ onInputChange, onClick }) {
    return (
        <div className="form-group goalEndDate">
            Completion Date
            <input
                onChange={onInputChange}
                name="endDate"
                className="form-control"
                placeholder="03/18/2021"
            />

            <button
                type="button"
                onClick={onClick}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Save
            </button>
        </div>
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

export function Summary({goalSummary}) {
    console.log("goalSummary", goalSummary)
    return (
        // What to do with the summary page.
        <div className="form-group goalSummary">
            Here is your goal summary
            <p>Goal Title: {goalSummary.title}</p>
            <p>Goal Description: {goalSummary.description}</p>
            <p>End Date: {goalSummary.endDate}</p>
            {goalSummary.steps.map(step => {
                return <p>Milestones: {step.title}</p>
            })}
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