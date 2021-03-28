import React from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "../DeleteButton";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
import Notes from "../Notes";
import "./style.css";

function Chart({ chartGoal, setGoals, checkCompleteStatus, handleDeadlineNotice }) {

  return (
    <>
    <div>
      <Card className="card-body p-0" id="#">
        <Card.Body>
          <Card.Header className="mb-2">
            <h1 style={{ fontSize: "1.25rem" }}>{chartGoal.title}</h1>
            {/* </h1> */}
          </Card.Header>
          <br />
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
              <Card.Subtitle className=" ml-3 mb-2 text-left">
                Description:
              </Card.Subtitle>
              <Card.Text
                className="text-left ml-5"
                style={{ marginLeft: "30%" }}
              >
                {chartGoal.description}
              </Card.Text>
            </div>
              <DeleteButton chartGoal={chartGoal} setGoals={setGoals} />
          </div>

          {/* ********************************************************** */}

          <div className="p-0" style={{ width: "100%" }}>
            <div>
              <div className="d-flex flex-wrap-reverse justify-content-between">
                <div
                  className="d-flex-column"
                  style={{
                    maxHeight: "250px",
                    overflowY: "scroll",
                    marginLeft: "10%",
                    width: "40%",
                  }}
                >
                  <StepsList
                    className="p-0"
                    style={{ height: "75%" }}
                    chartGoal={chartGoal}
                    setGoals={setGoals} 
                    checkCompleteStatus={checkCompleteStatus}
                  />
                </div>
                <div style={{ marginRight: "17%" }}  value={chartGoal.daysLeft} id={chartGoal.daysLeftHalf} onChange= {value => handleDeadlineNotice(value)}>
                  {chartGoal.daysLeft ? 
                    <h3 
                      className="text-success text-center mr-1 mb-3">
                      Days Left: {chartGoal.daysLeft}
                    </h3>
                  : null}
                  <PieProgressBar 
                  chartGoal={chartGoal}
                  />
                </div>
              </div>
            </div>
          </div>
          <Notes chartGoal={chartGoal} setGoals={setGoals} />
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default Chart;
