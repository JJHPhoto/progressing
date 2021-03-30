/* eslint-disable no-sequences */
import React from "react";
import { Dropdown, Card } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
import {Link} from "react-router-dom";

export function GoalTitle({ onInputChange, onClick }) {
    return (
        <Card className="goalContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Let's Title Your Goal</h1>
            </Card.Header>
            <p className="paragraph">In every moment of every day ad-infinitum, going after your goals can be one of the hardest things you can do. We help you define, break down, and outline your goal. We give you easy to read data that helps you keep track of how you're <span className="progressing">Progressing.</span></p>
            <div
                className="form-group myContainer">
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
        <Card className="goalContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Describe Your Goal</h1>
            </Card.Header>
            <p className="paragraph">Here you can describe in more detail about this goal. What does this goal mean to you?</p>
            <div 
                className="form-group myContainer">
                <textarea
                    onChange={onInputChange}
                    name="description"
                    className="form-control inputField"
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
        </Card>
    );
}

export function Milestone({ onInputChange, onClick }) {
    return (
        <Card className="goalContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Milestone</h1>
            </Card.Header>
            <p className="paragraph"><span className="progressing">Milestone</span> : <i>An important point in progress or development.</i></p>
          
            <p className="paragraph">Here we break your goal up into into milestones. This will make them measurable and more attainable. </p>
            <div className="form-group myContainer">
                <input
                    onChange={onInputChange}
                    type="text"
                    name="steps"
                    className="form-control inputField"
                    placeholder="Milestone"
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

export function MilestoneDropdown({ onClick }) {
    return (
        <Card className="goalContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>You're on a Roll!</h1>
            </Card.Header>
            <div className="form-group myContainer">
                <Dropdown>
                    <p className="paragraph">Do you want to add another milestone to your goal?</p>
                    <Dropdown.Toggle
                        className="toggleButton" 
                        variant="success" 
                        id="dropdown-basic">
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
            </div>
        </Card>
    );
}

export function GoalTypeDropdown({ onClick }) {
    return (
        <Card className="goalContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Date Picker</h1>
            </Card.Header>
            <div className="form-group myContainer">
                <Dropdown>
                    <p className="paragraph">Do you have a start and end date in mind? Let's get a target date for completing this goal. This will assist you in keeping track of your milestones.</p>
                    <Dropdown.Toggle 
                        className="toggleButton"
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
            </div>
        </Card>
    );
}

// export function GoalEndDate({ onInputChange, onClick }) {
//     return (
//         <Card className="goalContainer">
//             <Card.Header style={{backgroundColor: "#01a35a"}}>
//                 <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Completion Date</h1>
//             </Card.Header>
//             <input
//                 onChange={onInputChange}
//                 name="endDate"
//                 className="form-control"
//                 placeholder="03/18/2021"
//             />

//             <button
//                 type="button"
//                 onClick={onClick}
//                 style={{ float: "right", marginBottom: 10 }}
//                 className="btn btn-success submitBtn"
//             >
//                 Next
//             </button>
//         </Card>
//     );
// }

export function DoneButton({ onClick }) {
    return (
        <Card className="form-group doneContainer">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Well Done!</h1>
            </Card.Header>
            <p className="paragraph">Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
            <div 
                className="form-group myContainer">
                <button
                    type="button"
                    onClick={onClick}
                    style={{ float: "right", marginBottom: 10 }}
                    className="btn btn-success submitBtn ml-3">
                    Done
                </button>
            </div>
        </Card>
    )
}

export function Summary({goalSummary}) {
    console.log("goalSummary", goalSummary)
    const userStartDate = goalSummary.startDate.slice("T", -14);
    const userEndDate = goalSummary.endDate.slice("T", -14);
    return (
        // What to do with the summary page.
        <Card className="form-group goalSummary">
            <Card.Header style={{backgroundColor: "#01a35a"}}>
                <h1 className="text-center text-white pt-3" style={{fontSize: "1.25rem"}}>Goal Summary</h1>
            </Card.Header>
            
            <p className="summary"><span className="font-weight-bold">Goal Title:</span><span className="font-weight-light">  {goalSummary.title}</span></p>
            <p className="summary"><span className="font-weight-bold">Goal Description:</span><span className="font-weight-light">  {goalSummary.description}</span></p>
            <p className="summary"><span className="font-weight-bold">Start Date:</span><span className="font-weight-light">  {userStartDate}</span></p>
            <p className="summary"><span className="font-weight-bold">End Date:</span><span className="font-weight-light">  {userEndDate}</span></p>
            {goalSummary.steps.map(step => {
                return <p className="summary" key={step.id} ><span className="font-weight-bold">Milestone:</span><span className="font-weight-light"> {step.name}</span></p>
            })}
        </Card>

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