import React, {useEffect, useState} from "react";
import "./style.css";
import {Form } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";

function StepsList({chartGoal, loadSteps, setStep}) {

    const [updatedGoals, setUpdatedGoals] = useState([]);

    const [currentCheckboxId, setCheckboxId] = useState({


        complete: false
    });

    console.log(loadSteps);
    console.log (currentCheckboxId);

    let toggleValue =""
    let listId = ""

    useEffect(() => {
        const data = {
          complete: localStorage.getItem('complete') === 'true' ? true : false,
        };
        setCheckboxId(data);
      }, []);

    // function refreshData() {
    //     window.location.reload();
    //   }


    useEffect(() => {
        reloadGoals();
      }, []);
    
      const reloadGoals = (req, res) => {
        goalAPI
          .getGoals(res)
          .then((res) => {
            setUpdatedGoals(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      };
    
   

    const handleChange = (e) => {
        let isChecked = e.target.checked;
            listId = e.target.id;
        let listName = e.target.name;
        
        if (isChecked) {
            localStorage.setItem("complete", isChecked);
            toggleValue = true
            setCheckboxId(prevData => ({
                ...prevData,
                complete: isChecked
              }));
            // setStep({
            //     complete: toggleValue, 
            //     _id: listId, 
            //     name: listName 
            // });
            console.log("///////////")
            updateStep(listId, listName);
            
        } else {
            localStorage.setItem("complete", false);
            toggleValue = false
            setCheckboxId(prevData => ({
                ...prevData,
                complete: isChecked
              }));
            // setStep({
            //     "steps.complete": toggleValue, 
            //     "steps._id": listId, 
            //     "steps.name": listName 
            // });
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
                // console.log(res)
                // refreshData()
                // this.forceUpdate()
                reloadGoals()
        )
    };



// const checkedCheckmark = () =>{
// //Keep check mark checked if the value is true
// }

return (
    <>
      {chartGoal.steps.map((step) => {
        return (
                <Form className="checklist m-5">   
                    <Form.Check className="milestone-header" name={step.name} type="checkbox" style={{fontSize: "20px"}} id={step._id} value={step.complete} onChange={e => handleChange(e)} label={step.name} checked={currentCheckboxId.complete}/>   
                </Form>   
                )
            })} 
        </>
        )
}
        
export default StepsList;
