import React from "react";
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
  // Summary,
  // GoalNotes,
  SubmitGoal,
} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";
import NavBar from "..//../components/NavBar/NavBar";
import { useIsAuthenticated, useAuthenticatedUser } from "../../utils/auth";

function CreateGoal() {

  const user = useAuthenticatedUser();
  const isAuthenticated = useIsAuthenticated();
  console.log("user", user)
  console.log("isAuthenticated", isAuthenticated)

  return (
    <div className="container">
      <NavBar />
      <Header />
      <GoalTitle />
      <GoalDescription />
      <GoalTypeDropdown />
      <GoalEndDate />
      <GoalMilestones />
      <ActionItemDropdown />
      <GoalActionItem />
      <AnotherActionItemDropdown />
      <AnotherMilestoneDropdown />
      {/* <Summary /> */}
      {/* <GoalNotes /> */}
      <SubmitGoal />
    </div>
  );
}

export default CreateGoal;
