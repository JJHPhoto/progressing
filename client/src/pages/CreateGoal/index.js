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
  // const isAuthenticated = useIsAuthenticated();
  // console.log("user._id", user._id);
  // console.log("isAuthenticated", isAuthenticated);

  const [goalFormState, setGoalFormState] = useState({
    title: "",
    description: "",
    goalType: "",
    endDate: "",
    milestones: [{}],
  });

  const [newGoalState, setNewGoalState] = useState({});

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log("value", value)
    console.log("name", name)

    setGoalFormState({
      ...goalFormState,
      [name]: value
    });
  };

  // const handleActionItems = (e, index) => {
  //   const { target } = e;
  //   const { name } = target;
  //   const { value } = target;
  //   console.log("value", value)
  //   console.log("name", name)

  //   setGoalFormState( goalFormState => {
  //     const milestone = [...goalFormState.milestones];
  //     const actionItem = [...goalFormState.milestones.actionItems];
  //     milestone[index] = {...milestone[index], [name]: value};
  //     actionItem[milestone] = {...actionItem[milestone], [name]: value};
  //     console.log("actionItem", actionItem)
  //     console.log("milstone", milestone)
  //     return { milestone };
  //   });

  // }

  const handleDoneButton = e => {
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

    console.log("newGoalState", newGoalState)

  }

  const handleFormSubmit = e => {
    e.preventDefault();

    goalAPI.saveGoal(newGoalState)
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
    
  }

  // console.log("goalFormState", goalFormState)

  return (
    <div className="container">
      <NavBar />
      <Header />
      <GoalTitle handleInputChange={handleInputChange}/>
      <GoalDescription handleInputChange={handleInputChange}/>
      <GoalTypeDropdown {...goalFormState} handleInputChange={handleInputChange}/>
      <GoalEndDate handleInputChange={handleInputChange}/>
      {/* <GoalMilestones 
        {...goalFormState}
        handleActionItems={handleActionItems}
      /> */}
      <GoalMilestones handleInputChange={handleInputChange}/>
      <ActionItemDropdown handleInputChange={handleInputChange}/>
      <GoalActionItem handleInputChange={handleInputChange}/>
      <AnotherActionItemDropdown handleInputChange={handleInputChange}/>
      <AnotherMilestoneDropdown handleInputChange={handleInputChange}/>
      <DoneButton handleDoneButton={handleDoneButton}/>
      <Summary newGoalState={newGoalState}/>
      <SubmitGoal handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default CreateGoal;
