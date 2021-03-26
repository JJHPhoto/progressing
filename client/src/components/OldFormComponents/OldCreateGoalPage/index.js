// Old Create Goal Page
// With functionality to include the third level action items
// Would need to continue conditionally rendering  questions

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
// import { propTypes } from "react-bootstrap/esm/Image";

function CreateGoal() {

  // User object
  const user = useAuthenticatedUser();

  // State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [thisStep, setThisStep] = useState("");
  const [allSteps, setAllSteps] = useState([]);
  const [thisStepChild, setThisStepChild] = useState("");
  const [allStepChildren, setAllStepChildren] = useState([]);
  const [conditionalQs, setConditionsalQs] = useState({});
  const [goalState, setGoalState] = useState({});
  const [indexOfCurrentStep, setIndexOfCurrentStep] = useState(0);

  // Step counter for conditional rendering
  const questionSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const currentStep = questionSteps[indexOfCurrentStep];
  // Step counter
  const nextStep = () => {

    setIndexOfCurrentStep(
      indexOfCurrentStep + 1
    )
  };

  // Title
  const handleTitle = (e) => {
    const { target } = e;
    const { value } = target;

    setTitle(
      value
    );
  };

  // Description
  const handleDescription = (e) => {
    const { target } = e;
    const { value } = target;

    setDescription(
      value
    );
  };

  // End Date
  const handleEndDate = (e) => {
    const { target } = e;
    const { value } = target;

    setEndDate(
      value
    );
  };

  // The current user milestone step
  const handleThisStep = (e) => {
    const { target } = e;
    const { value } = target;

    setThisStep({
        value
    });
  }

  // The milestone array
  const handleAllSteps = () => {
  
    const thisCurrentStep = thisStep.value;

    if (allSteps[0] === "") {
      
      setAllSteps([
        {
          id: allSteps.length,
          name: thisCurrentStep
        }
      ])

    } else {
      
      setAllSteps([
        ...allSteps, {
          id: allSteps.length,
          name: thisCurrentStep
        }
      ])
    }

    nextStep();
  }

  const handleThisStepChild = (e) => {
    const { target } = e;
    const { value } = target;

    setThisStepChild({
        value
    });
  }

  const handleAllStepChildren = (e) => {

    const thisCurrentStepChild = thisStepChild.value;
    const lastStep = allSteps[allSteps.length-1];

    console.log("thisCurrentStepChild", thisCurrentStepChild);
    console.log("lastStep", lastStep);

    // if (allStepChildren[0] === "") {
      
      // setAllStepChildren([
      //   {
          // id: allSteps.length,
          // name: thisCurrentStep
      //   }
      // ])

    // } else {
      
      // setAllStepChildren([
      //   ...allSteps, {
      //     id: allSteps.length,
      //     name: thisCurrentStep
      //   }
      // ])
    // }

    nextStep();
  }

  // Handler for conditional questions
  const handleConditionals = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    setConditionsalQs({
      [name]: value
    });

    nextStep();
  };

  // New goal object
  const handleGoalState = () => {

    const thisTitle = title;
    const thisDescription = description;
    const thisEndDate = endDate;

    setGoalState({
      ...goalState,
      title: thisTitle,
      description: thisDescription,
      endDate: thisEndDate
    });

    nextStep();
  }

  const handleDoneButton = () => {
    setGoalState({
      ...goalState,
      steps: allSteps,
      user_id: user.id
    });

    nextStep();
  }

  // Handler for submitting new goal object to api
  const handleFormSubmit = (e) => {
    e.preventDefault();

    goalAPI.saveGoal(goalState)
      .then(res => console.log("res", res))
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
  console.log("thisStepChild", thisStepChild);
  console.log("allStepChildren", allStepChildren);
  console.log("conditionalQs", conditionalQs);
  console.log("goalState", goalState);

  return (
    <div className="container">
      <NavBar />
      <Header />

      {currentStep === 1 &&
        (<GoalTitle
          onInputChange={handleTitle} 
          onClick={handleGoalState}/>
        )
      }

      {currentStep === 2 &&
        (<GoalDescription
          onInputChange={handleDescription} 
          onClick={handleGoalState}/>
        )
      }

      {currentStep === 3 &&
        (<GoalMilestones
          onInputChange={handleThisStep} 
          onClick={handleAllSteps}/>
        )
      }

      {currentStep === 4 &&
        (<ActionItemDropdown
          onClick={handleConditionals}/>
        )
      }

      {currentStep === 5 &&
      (conditionalQs.actionItem === "true") &&
        (<GoalActionItem
          onInputChange={handleThisStepChild} 
          onClick={handleAllStepChildren}/>
        )
      }

      {currentStep === 5 &&
      (conditionalQs.actionItem === "false") &&
        (<AnotherMilestoneDropdown 
          onClick={handleConditionals}/>
        )
      }

      {currentStep === 6 &&
      (!conditionalQs.anotherMilestone) &&
        (<AnotherActionItemDropdown
          onClick={handleConditionals}/>
        )
      } 

      {currentStep === 6 &&
      (conditionalQs.anotherMilestone === "true") &&
        (<GoalMilestones
          onInputChange={handleThisStep} 
          onClick={handleAllSteps}/>
        )  
      }

      {currentStep === 6 &&
      (conditionalQs.anotherMilestone === "false") &&
        (<GoalTypeDropdown
          onClick={handleConditionals}/>
        )  
      }

      {currentStep === 7 && 
      (conditionalQs.anotherActionItem === "true") &&
        (<GoalActionItem
          onInputChange={handleThisStepChild} 
          onClick={handleAllStepChildren}/>
        )
      }

      {currentStep === 7 && 
      (conditionalQs.anotherActionItem === "false") &&
        (<AnotherMilestoneDropdown 
          onClick={handleConditionals}/>
        )
      }

      {currentStep === 7 && 
      (!conditionalQs.goalType) &&
        (<AnotherMilestoneDropdown 
          onClick={handleConditionals}/>
        )
      }

      {currentStep === 7 && 
      (conditionalQs.goalType === "true") &&
        (<GoalEndDate 
          onInputChange={handleEndDate}
          onClick={handleGoalState}/>
        )
      }

      {currentStep === 7 && 
      (conditionalQs.goalType === "false") &&
        (<DoneButton 
          onClick={handleDoneButton}/>
        )
      }

      {currentStep === 8 && 
        <div>
          (<Summary 
            goalSummary={goalState}/>
          <SubmitGoal 
            onClick={handleFormSubmit}/>)
        </div>
      }

    </div>
  );
}

export default CreateGoal;
