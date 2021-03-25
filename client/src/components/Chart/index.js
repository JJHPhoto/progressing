import React from "react";
import { Card } from "react-bootstrap";
import BarChart from "../BarChart";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
import "./style.css";

function Chart(props) {
  return (
    <div>
      {/* {console.log("charts", props)} */}
      <Card className="card-body p-0">
        <Card.Body>
          <Card.Header className="mb-2">
            {/* <h1 className="text-center mb-5" style={{ width: "100%" }}> */}
            <h1>{props.chartGoal.title}</h1>
            {/* </h1> */}
          </Card.Header>
          <br />
          <Card.Subtitle
            className="mb-2 text-left"
            style={{ marginLeft: "40px" }}
          >
            Description:
          </Card.Subtitle>
          <Card.Text className="text-left" style={{ marginLeft: "60px" }}>
            {props.chartGoal.description}
          </Card.Text>

          {/* ********************************************************** */}

          <div className="p-0" style={{ width: "100%" }}>
            <div
            //  style={{marginLeft: "120px", marginRight: "120px", marginTop: "50px", marginBottom: "50px" }}
            >
              <div className="d-flex flex-wrap-reverse justify-content-between">
                <div className="d-flex-column">
                  <StepsList chartGoal={props.chartGoal} />
                </div>
                <div>
                  <h3 className="text-success text-center mr-1 mb-3">
                    Days Left: 10
                  </h3>
                  <PieProgressBar chartGoal={props.chartGoal} />
                  <h2 className="text-center" style={{ marginTop: "80px" }}>
                    Note Pad
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Chart;
