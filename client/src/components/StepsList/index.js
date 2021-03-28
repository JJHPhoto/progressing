import React, {useState} from "react";
import "./style.css";
import {Form } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";
import API from "../../utils/API";
import {useAuthenticatedUser} from "../../utils/auth";
import MessageFull from "../MessageComplete";

function StepsList({chartGoal, setGoals}) {

    const [visible, toggleVisible] = useState(false);

    const toggleNotification = () => {
          toggleVisible(!visible)
          return;
        }  

  const user = useAuthenticatedUser();

    let toggleValue =""
    let listId = ""
    
      const loadGoals = (req, res) => {
        API
        .lookup(req)
        .then((res) => {
          setGoals(res.data.goalsSet)
        }).then((res) => {
                loadUpdatedGoal();
            })
        .catch((err) => console.log(err));
      };

      const loadUpdatedGoal = (req, res) => {
        goalAPI
        .getGoal(chartGoal._id)
        .then((res) => {
            checkCompleteStatus(res)
          console.log("Updated Goal: res", res);
            })
        
        .catch((err) => console.log(err));
      };

    const checkCompleteStatus = (res) => {
        console.log("check status full", res.data.completeFull)
        console.log("check status half", res.data.completeHalf)
        if (res.data.completeFull === true) {
            toggleNotification();
        }
        if (res.data.completeHalf === true) {
            
        }
    }  
    
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
    }

// update api route
    const updateStep = (id, name) => {
            goalAPI.updateStep(chartGoal._id, {
                "id": id,
                "value": toggleValue 
            })
            .then(res => 
                
                loadGoals(user._id)
        )
    };

    console.log("chartGoal.steps.id", chartGoal.steps.id)
   
return (
    <>
     <div>{visible ? <MessageFull visible={visible} toggleVisible={toggleVisible}/> : null}</div>
      {chartGoal.steps.map((step) => {
        return (
                <Form key={step.id} className="checklist m-5">   
                    <Form.Check className="milestone-header" name={step.name} type="checkbox" style={{fontSize: "20px"}} id={step.id} value={step.complete} onChange={e => handleChange(e)} label={step.name} checked={step.complete}/>   
                </Form>     
                )
            })} 
        </>
        )
}
        
export default StepsList;
