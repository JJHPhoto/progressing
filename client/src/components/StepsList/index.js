import React, {useEffect, useState} from "react";
import "./style.css";
import {Form } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";

function StepsList({chartGoal, setGoals, loadSteps, setStep, updatedGoals}) {

    console.log("chartGoal-list", chartGoal);
    console.log("updatedGoals", updatedGoals)

    let toggleValue =""
    let listId = ""
    
      const loadGoals = (req, res) => {
        goalAPI
          .getGoals(res)
          .then((res) => {
            setGoals(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      };
    
    const handleChange = (e) => {
        let isChecked = e.target.checked;
            listId = e.target.id;
        let listName = e.target.name;
        
        if (isChecked) {
            toggleValue = true
            console.log("///////////")
            updateStep(listId, listName);
            
        } else {
            toggleValue = false
            console.log("///////////")
            updateStep(listId, listName);
        }
        console.log()    
    }

// update api route
    const updateStep = (id, name) => {
        console.log("data", id, name)
        console.log("toggleValue", toggleValue)
            goalAPI.updateGoal(chartGoal._id, {
                "steps.0.complete": toggleValue,
                // "steps._id": id,
                // "steps.name": name 
            })
            .then(res => 

                loadGoals()
        )
    };
   
return (
    <>
      {chartGoal.steps.map((step) => {
        return (
                <Form className="checklist m-5">   
                    <Form.Check className="milestone-header" name={step.name} type="checkbox" style={{fontSize: "20px"}} id={step._id} value={step.complete} onChange={e => handleChange(e)} label={step.name} checked={step.complete}/>   
                </Form>   
                )
            })} 
        </>
        )
}
        
export default StepsList;
