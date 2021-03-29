/* eslint-disable no-sequences */
import React from "react";
import { Dropdown, Card } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
import {Link} from "react-router-dom";


export function GoalTitle({ onInputChange, onClick }) {
    return (
        <Card className="titleContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Let's title your goal.</h1>
            </Card.Header>
            <div
                className="form-group goalTitle">
                <input
                    onChange={onInputChange}
                    name="title"
                    className="form-control inputField"
                    placeholder="Goal Title (required)"
                />

                <button
                    type="button"
                    onClick={onClick}
                    style={{ float: "right", marginBottom: 10 }}
                    className="btn btn-success submitBtn"
                >
                    Next
                </button>
            </div>
        </Card>
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
                Next
            </button>
        </div>
    );
}

export function Milestone({ onInputChange, onClick }) {
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
                Next
            </button>
        </div>
    );
}

export function MilestoneDropdown({ onClick }) {
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
                Next
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
                return <p key={step.id} >Milestones: {step.name}</p>
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
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                Submit New Goal
            </Link>
        </button>
    );
}