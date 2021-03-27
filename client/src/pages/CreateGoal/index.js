import React, { useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import {
  GoalTitle,
  GoalDescription,
  Milestone,
  MilestoneDropdown,
  GoalTypeDropdown,
  GoalEndDate,
  DoneButton,
  Summary,
  SubmitGoal,
} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";
import NavBar from "..//../components/NavBar/NavBar";
import { useAuthenticatedUser } from "../../utils/auth";
import goalAPI from "../../utils/goalApi";

// import { propTypes } from "react-bootstrap/esm/Image";

function CreateGoal() {

  // User object
  const user = useAuthenticatedUser();

  // Step counter state and handler for conditional rendering
  const [indexOfCurrentStep, setIndexOfCurrentStep] = useState(0);

  // Array of numbers for questions to step through
  const questionSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  // Setting variable to first position of the array
  const currentStep = questionSteps[indexOfCurrentStep];

  // Step counter
  const nextStep = () => {

    setIndexOfCurrentStep(
      indexOfCurrentStep + 1
    )
  };

  // Title state and handler
  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    const { target } = e;
    const { value } = target;

    setTitle(
      value
    );
  };

  // Description state and handler
  const [description, setDescription] = useState("");
  const handleDescription = (e) => {
    const { target } = e;
    const { value } = target;

    setDescription(
      value
    );
  };

  // End Date state and handler
  const [endDate, setEndDate] = useState("");
  const handleEndDate = (e) => {
    const { target } = e;
    const { value } = target;

    setEndDate(
      value
    );
  };

  // The user's current step state and handler
  const [thisStep, setThisStep] = useState("");
  const handleThisStep = (e) => {
    const { target } = e;
    const { value } = target;

    setThisStep({
      value
    });
  }

  // The user's array of steps state and handler
  const [allSteps, setAllSteps] = useState([]);
  const handleAllSteps = () => {

    const thisCurrentStep = thisStep.value;

    if (allSteps[0] === "") {

      setAllSteps([
        {
          id: allSteps.length + 1,
          name: thisCurrentStep,
          complete: false
        }
      ])

    } else {

      setAllSteps([
        ...allSteps, {
          id: allSteps.length + 1,
          name: thisCurrentStep,
          complete: false
        }
      ])
    }

    nextStep();
  }

  // Conditional question state and handler
  const [conditionalQs, setConditionsalQs] = useState({});
  const handleConditionals = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    setConditionsalQs({
      ...conditionalQs,
      [name]: value
    });

    nextStep();
  };

  // New goal state and handler
  const [goalState, setGoalState] = useState({});
  const handleGoalState = () => {

    const thisTitle = title;
    const thisDescription = description;
    const thisEndDate = endDate;

    setGoalState({
      ...goalState,
      complete: false,
      title: thisTitle,
      description: thisDescription,
      endDate: thisEndDate
    });

    nextStep();
  }

  // Done button handler
  const handleDoneButton = () => {
    setGoalState({
      ...goalState,
      steps: allSteps,
      user_id: user._id
    });

    nextStep();
  }

  // Handler for submitting new goal object to api
  const handleFormSubmit = (e) => {
    e.preventDefault();

    goalAPI.saveGoal(goalState)
      .then(res => console.log("res", res)
      )
      .catch(err => console.log("err", err));

  }

  // Console log different values
  console.log("questionSteps[indexOfCurrentStep]", questionSteps[indexOfCurrentStep]);
  if (title) {
    console.log("title", title);
  }
  if (description) {
    console.log("description", description);
  }
  if (endDate) {
    console.log("endDate", endDate);
  }
  console.log("thisStep", thisStep);
  console.log("allSteps", allSteps);
  console.log("conditionalQs", conditionalQs);
  console.log("goalState", goalState);

  return (
    <div className="container">
      <NavBar />
      <Header />

      {currentStep === 1 &&
        <div>
          <p>Let's define your goal at the root level. Type in a phrase that generally sums up what you hope to accomplish.</p>
          
          <GoalTitle
            onInputChange={handleTitle}
            onClick={handleGoalState} />
        </div>
      }

      {currentStep === 2 &&
        <div>
          <p>Here you can describe, in more detail, what this goal means to you. Why do you want to start this goal? When do you want to complete it?</p>
          
          <GoalDescription
            onInputChange={handleDescription}
            onClick={handleGoalState} />
        </div>
      }

      {currentStep === 3 &&
        <div>
          <p>Is this goal time based? Do you have an end date?</p>
          
          <GoalTypeDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 4 &&
      (conditionalQs.goalType === "true") &&
        <div>
          <p>Let's get a target date for completing this goal. This will assist you in keeping track of your milestones.</p>
          
          <GoalEndDate
            onInputChange={handleEndDate}
            onClick={handleGoalState} />
        </div>
      }
          
      {currentStep === 4 &&
      (conditionalQs.goalType === "false") &&
        <div>
          <p><span>Milestone</span> : an important point in progress or development.</p>
          
          <p>What's the first milestone you need that will help you hit your goal?</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 5 &&
      (conditionalQs.goalType === "true") &&
        <div>
          <p><span>Milestone</span> : an important point in progress or development.</p>
          
          <p>What's the first milestone you need that will help you hit your goal?</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }
            
      {currentStep === 5 &&
      (conditionalQs.goalType === "false") &&
        <div>
          <p>You're on a roll!</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 6 &&
      (conditionalQs.goalType === "true") &&
        <div>
          <p>You're on a roll!</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 6 &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>What's the next milestone on the path to your goal?</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 6 &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 7 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>What's the next milestone on the path to your goal?</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 7 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 7 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep going!</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 7 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 8 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep going!</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 8 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 8 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 8 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 9 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 9 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 9 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>You've made three milestones. Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 9 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
         <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 10 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>You've made three milestones. Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 10 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 10 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 10 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 11 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 11 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 11 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 11 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 12 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 12 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
         <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 12 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 12 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 13 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 13 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 13 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 13 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 14 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 14 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 14 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 14 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 15 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 15 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 15 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 15 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 16 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 16 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 16 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 16 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 17 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 17 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 17 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 17 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 18 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 18 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 18 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 18 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 19 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 19 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 19 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 19 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 20 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 20 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 20 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 20 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 21 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 21 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 21 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 21 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 22 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Would you like to break your goal up further?</p>

          <MilestoneDropdown
            onClick={handleConditionals} />
        </div>
      }

      {currentStep === 22 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 22 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Let's keep breaking your goal into milestones.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 22 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summery.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 23 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>This is your last mileston.</p>
          
          <Milestone
            onInputChange={handleThisStep}
            onClick={handleAllSteps} />
        </div>
      }

      {currentStep === 23 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 23 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Looks like you've finished outlining your goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 23 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

{currentStep === 24 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Congratulations! You've made <span>ten</span> milestones for this goal. Hit the done button and we'll head over to your summary.</p>
          
          <DoneButton
            onClick={handleDoneButton} />
        </div>
      }

      {currentStep === 24 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "false") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 24 &&
      (conditionalQs.goalType === "false") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit} />
        </div>
      }

      {currentStep === 25 &&
      (conditionalQs.goalType === "true") &&
      (conditionalQs.anotherMilestone === "true") &&
        <div>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit}  />
        </div>
      }

    </div>
  );
}

export default CreateGoal;
