import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import ProgFooter from "../../components/Footer";
// import { propTypes } from "react-bootstrap/esm/Image";
import {
  GoalTitle,
  GoalDescription,
  Milestone,
  MilestoneDropdown,
  GoalTypeDropdown,
  DoneButton,
  Summary,
  SubmitGoal,
} from "../../components/GoalForm/GoalForm";
import { Header } from "../../components/Header/Header";
import NavBar from "..//../components/NavBar/NavBar";
import { useAuthenticatedUser } from "../../utils/auth";
import goalAPI from "../../utils/goalApi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const updatedValue= value.charAt(0).toUpperCase() + value.slice(1);

    setTitle(
      updatedValue
    );
  };

  // Description state and handler
  const [description, setDescription] = useState("");
  const handleDescription = (e) => {
    const { target } = e;
    const { value } = target;
    const updatedValue= value.charAt(0).toUpperCase() + value.slice(1);

    setDescription(
      updatedValue
    );
  };

  // Calendar picker state and handler
  const [startDate, setStartDate] = useState(new Date());
  const handleStartDate = (startDate) => {
    setStartDate(startDate);
    console.log("startDate", startDate)
  }

  // Calendar picker state and handler
  const [endDate, setEndDate] = useState(new Date());
  const handleEndDate = (endDate) => {
    setEndDate(endDate);
    console.log("endDate", endDate)
  }

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

    const updatedValue = thisStep.value;
    const thisCurrentStep= updatedValue.charAt(0).toUpperCase() + updatedValue.slice(1);

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
    const thisStartDate = startDate.toISOString();
    const thisEndDate = endDate.toISOString();

    setGoalState({
      ...goalState,
      complete: false,
      title: thisTitle,
      description: thisDescription,
      startDate: thisStartDate,
      endDate: thisEndDate
    });

    nextStep();
  }

  // // Modal and content
  // const [modalShow, setModalShow] = React.useState(false);

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
      .then(res => notifyCreate()
      )
      .catch(err => console.log("err", err));

  }

   //Notification for created goal
   const notifyCreate = () => toast.info('You have successfully created a goal! 🎯', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  // Console log different values
  console.log("questionSteps[indexOfCurrentStep]", questionSteps[indexOfCurrentStep]);
  if (title) {
    console.log("title", title);
  }
  if (description) {
    console.log("description", description);
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
        <div className="titleCard">
          <p  className="titleParagraph">In every moment of every day ad-infinitum, going after your goals can be one of the hardest things you can do. We help you define, break down, and outline your goal. We give you easy to read data that helps you keep track of how you're <Link to="/howto" className="progressing">Progressing</Link>.</p>
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
          <Calendar 
            onChange={handleStartDate} 
            value={startDate} />
          <Calendar 
            onChange={handleEndDate} 
            value={endDate} />
          <button
                type="button"
                onClick={handleGoalState}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success submitBtn"
            >
                Next
            </button>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
           <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
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
          <ToastContainer 
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable/>
          <p>Here is your goal summary. If you feel like you want to make some edits to this goal, you can find all of your goals on your dashboard.</p>
          <Summary
            goalSummary={goalState} />
          <SubmitGoal
            onClick={handleFormSubmit}  />
           
        </div>
      }
    <ProgFooter />
    </div>
  );
}

export default CreateGoal;
