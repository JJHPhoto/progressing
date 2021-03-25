import React, {useEffect,useState} from "react";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
import BarChart from "../BarChart";

function Goal({chartGoal}) {

  return (
    <div>
      {chartGoal.map(goal => {
        return (
          <div style={{marginLeft: "120px", marginRight: "120px", marginTop: "50px", marginBottom: "50px" }} >
              <div className="d-flex flex-wrap-reverse justify-content-between">
                  <div className="d-flex-column">
                    <StepsList chartGoal={goal} />
                  </div>
                  <div>
                      <h3 className="text-success text-center mr-1 mb-3">Days Left: 10</h3>
                      <PieProgressBar chartGoal={goal}/>
                      <h2 className="text-center" style={{marginTop: "80px"}}>Note Pad</h2>
                  </div>
              </div>
              <div className="" style={{marginTop: "20px"}}  >
                <BarChart />
              </div>
          </div>
          )
        })}  
    </div>
  );
}

export default Goal;