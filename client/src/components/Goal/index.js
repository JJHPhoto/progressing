import React, {useState, useEffect} from "react";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
// import BarChart from "../BarChart";

function Goal(props) {

  // console.log(chartGoal);

  const [steps, setStep] = useState([]);

  return (
    <div className="p-0" style={{ width: "100%" }}>
            <div
            //  style={{marginLeft: "120px", marginRight: "120px", marginTop: "50px", marginBottom: "50px" }}
            >
              <div className="d-flex flex-wrap-reverse justify-content-between">
                <div className="d-flex-column" style={{overflowY: "scroll", marginLeft: "10%", width: "40%" }}>
                  <StepsList
                    className="p-0"
                    style={{ height: "75%" }}
                    chartGoal={props.chartGoal}
                    loadSteps={steps} 
                    setStep={setStep}
                  />
                </div>
                <div style={{ marginRight: "17%" }}>
                  <h3 className="text-success text-center mr-1 mb-3">
                    Days Left: 10
                  </h3>
                  <PieProgressBar chartGoal={props.chartGoal}/>
                </div>
              </div>
              <h2 className="text-center" style={{ marginTop: "50px" }}>
                    Note Pad
                  </h2>
            </div>
          </div>
  );
}

export default Goal;