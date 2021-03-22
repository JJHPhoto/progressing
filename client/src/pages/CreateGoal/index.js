import React, { useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import {
  GoalTitle,
  GoalDescription,
  GoalTypeDropdown,
  GoalEndDate,
  GoalMilestones,
  ActionItemDropdown,
  GoalActionItem,
  AnotherActionItemDropdown,
  AnotherMilestoneDropdown,
  DoneButton,
  Summary,
  SubmitGoal,
} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";
import NavBar from "..//../components/NavBar/NavBar";
import { useAuthenticatedUser } from "../../utils/auth";
import goalAPI from "../../utils/goalApi";

function CreateGoal() {

  const user = useAuthenticatedUser();

  const [goalFormState, setGoalFormState] = useState({
    title: "",
    description: "",
    goalType: "",
    endDate: "",
    milestones: [
      {
        name: "",
        actionItems: [
          {
            name: ""
          }
        ]
      }
    ],
  });

  const [newGoalState, setNewGoalState] = useState({});

  const handleInputChange = ( e ) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log("value", value)
    console.log("name", name)

    setGoalFormState({
      ...goalFormState,
      [name]: value
    });
  };

  const handleMilestones = ( e ) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    console.log("value", value)
    console.log("name", name)
    
    const isMilestones = (milestones) => milestones.name === "";
    const elementsIndex = goalFormState.milestones.findIndex(isMilestones)
    let newMilstoneArray = [...goalFormState.milestones]
    console.log("elementIndex", elementsIndex);
    console.log("newMilstoneArray", newMilstoneArray);

    newMilstoneArray[elementsIndex] = {...newMilstoneArray[elementsIndex], name: value}
    
    setGoalFormState(() => ({
      ...goalFormState, 
      milestones: newMilstoneArray 
    }));
  }

  const handleDoneButton = ( e ) => {
    e.preventDefault();
    setNewGoalState({
      title: goalFormState.title,
      description: goalFormState.description,
      goalType: goalFormState.goalType,
      endDate: goalFormState.endDate,
      milestones: [goalFormState.milestones],
      // actionItems: [goalFormState.actionItems],
      user_id: user._id
    });
    console.log("goalFormState", goalFormState)
    console.log("newGoalState", newGoalState)
  }

  const handleFormSubmit = ( e ) => {
    e.preventDefault();

    goalAPI.saveGoal(newGoalState)
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
    
  }
  console.log("goalFormState", goalFormState)
  return (
    <div className="container">
      <NavBar />
      <Header />
      <GoalTitle onInputChange={handleInputChange}/>
      <GoalDescription onInputChange={handleInputChange}/>
      <GoalTypeDropdown {...goalFormState} onClick={handleInputChange}/>
      <GoalEndDate onInputChange={handleInputChange}/>
      <GoalMilestones onInputChange={handleMilestones}/>
      {/* <GoalMilestones onInputChange={handleInputChange}/> */}
      <ActionItemDropdown onClick={handleInputChange}/>
      <GoalActionItem onInputChange={handleInputChange}/>
      <AnotherActionItemDropdown onClick={handleInputChange}/>
      <AnotherMilestoneDropdown onClick={handleInputChange}/>
      <DoneButton onClick={handleDoneButton}/>
      <Summary newGoalState={newGoalState}/>
      <SubmitGoal onClick={handleFormSubmit}/>
    </div>
  );
}

export default CreateGoal;
