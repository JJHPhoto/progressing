import React, {useState} from "react";
import { Card } from "react-bootstrap";
// import BarChart from "../BarChart";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
import "./style.css";

function Chart({chartGoal, setGoals, handleReloadState}) {

  const [steps, setStep] = useState([]);

  console.log("Chart Component: steps state", steps)

  return (
    <div>
      {/* {console.log("charts", props)} */}
      <Card className="card-body p-0">
        <Card.Body>
          <Card.Header className="mb-2">
            {/* <h1 className="text-center mb-5" style={{ width: "100%" }}> */}
            <h1>{chartGoal.title}</h1>
            {/* </h1> */}
          </Card.Header>
          <br />
          <Card.Subtitle
            className="mb-2 text-left"
            style={{ marginLeft: "8%" }}
          >
            Description:
          </Card.Subtitle>
          <Card.Text className="text-left" style={{ marginLeft: "10%" }}>
            {chartGoal.description}
          </Card.Text>

          {/* ********************************************************** */}

          <div className="p-0" style={{ width: "100%" }}>
            <div
            //  style={{marginLeft: "120px", marginRight: "120px", marginTop: "50px", marginBottom: "50px" }}
            >
              <div className="d-flex flex-wrap-reverse justify-content-between">
                <div className="d-flex-column" style={{overflowY: "scroll", marginLeft: "10%", width: "40%" }}>
                  <StepsList
                    className="p-0"
                    style={{ height: "75%" }}
                    chartGoal={chartGoal}
                    loadSteps={steps} 
                    setStep={setStep}
                    setGoals={setGoals}
                  />
                </div>
                <div style={{ marginRight: "17%" }}>
                  <h3 className="text-success text-center mr-1 mb-3">
                    Days Left: 10
                  </h3>
                  <PieProgressBar 
                  chartGoal={chartGoal}
                  />
                </div>
              </div>
              <h2 className="text-center" style={{ marginTop: "50px" }}>
                    Note Pad
                  </h2>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Chart;
