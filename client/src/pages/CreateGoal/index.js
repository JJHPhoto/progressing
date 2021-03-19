import React from "react";
import {
  GoalDescription,
  GoalNotes,
  GoalTitle,
  GoalTypeDropdown,
  SubmitGoal,
} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";
import NavBar from "..//../components/NavBar/NavBar";

function CreateGoal() {
  return (
    <div className="container">
      <NavBar />
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
