import React from "react";
import {GoalDescription, GoalNotes, GoalTitle, GoalTypeDropdown, SubmitGoal} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";

function CreateGoal() {

  return (
    <div className="container">
    <Header />
    <GoalTitle />
    <GoalDescription />
    <GoalTypeDropdown />
    <GoalNotes />
    <SubmitGoal />
    </div>
  );
}

export default CreateGoal;