import React, { useState } from "react";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
// import BarChart from "../BarChart";

<<<<<<< HEAD
function Goal({ chartGoal }) {
=======
function Goal(props) {

>>>>>>> 897b2b8e1131a6e72684f84f9dffb9affbf8785a
  // console.log(chartGoal);

  const [steps, setStep] = useState([]);

  return (
<<<<<<< HEAD
    <div>
      {chartGoal.map((goal) => {
        return (
          <div
            style={{
              marginLeft: "120px",
              marginRight: "120px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <div className="d-flex flex-wrap-reverse justify-content-between">
              <div className="d-flex-column">
                <StepsList
                  chartGoal={goal}
                  loadSteps={steps}
                  setStep={setStep}
                />
              </div>
              <div>
                <h3 className="text-success text-center mr-1 mb-3">
                  Days Left: 10
                </h3>
                <PieProgressBar chartGoal={goal} />
                <h2 className="text-center" style={{ marginTop: "80px" }}>
                  Note Pad
                </h2>
              </div>
            </div>
            <div className="" style={{ marginTop: "20px" }}>
              <BarChart />
            </div>
          </div>
        );
      })}
    </div>
=======
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
>>>>>>> 897b2b8e1131a6e72684f84f9dffb9affbf8785a
  );
}

export default Goal;
