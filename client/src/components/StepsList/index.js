import React from "react";
import "./style.css";
import {Form } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";

function StepsList({chartGoal, loadSteps, setStep}) {

    console.log(loadSteps);
    
    let toggleValue =""

    const handleChange = (e) => {
        let isChecked = e.target.checked;
        let listId = e.target.id;
        let listName = e.target.name;
        
        if (isChecked) {
            toggleValue = true
            setStep({
                complete: toggleValue, 
                id: listId, 
                name: listName 
            });
            console.log("///////////")
            // updateStep(loadSteps);
            
        } else {
            toggleValue = false
            setStep({
                complete: toggleValue, 
                id: listId, 
                name: listName 
            });
            console.log("///////////")
            // updateStep(loadSteps);
        }    
    }

// update api route
    // const updateStep = (step) => {
    //     console.log(step)
    //         goalAPI.updateGoal(step.id, step.complete)
    //         .then(res => console.log(res)
    //     )};



// const checkedCheckmark = () =>{
// //Keep check mark checked if the value is true
// }
return (
    <>
      {chartGoal.steps.map((step) => {
        return (
                <Form className="checklist m-5">   
                    <Form.Check className="milestone-header" name={step.name} type="checkbox" style={{marginLeft: "30%"}} id={step.id} value={step.complete} onChange={e => handleChange(e)} label={step.name}/>   
                    {/* <ul>
                    {step.steps.map(step =>{
                        return(
                            // Maybe I can setState to the actionItem within the line to get the new value, which is changed within the onChange. Once I get the new value, I can pass that into the API route
                            <Form.Check className="steps-header" type="checkbox" id={step.id} value={step.complete} onChange={null} label={step.name}  />   
                        )
                    })}  
                    </ul> */}
                </Form>   
                )
            })} 
        </>
        )
    }
        
export default StepsList;
