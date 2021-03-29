import React from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "../DeleteButton";
import PieProgressBar from "../PieProgressBar";
import StepsList from "../StepsList";
import Notes from "../Notes";
import "./style.css";
import badge from "../photos/star.png"

function Chart({ chartGoal, setGoals, checkCompleteStatus, handleDeadlineNotice, deleteGoal, setIndex, notifyDelete }) {

  return (
    <>
    <div>
      <Card className="card-body p-0" id="#">
        <Card.Body>
          <Card.Header className="mb-2">
            <h1 style={{ fontSize: "1.25rem" }}>{chartGoal.title}</h1>
          </Card.Header>
          <br />
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
              <Card.Subtitle className=" ml-3 mb-3 text-left">
                Description:
              </Card.Subtitle>
              <Card.Text
                className="description text-left mb-0
                 ml-5"
                style={{ marginLeft: "30%", }}
              >
                {chartGoal.description}
              </Card.Text>
            </div>
              <DeleteButton chartGoal={chartGoal} setGoals={setGoals} deleteGoal={deleteGoal} setIndex={setIndex} notifyDelete={notifyDelete} />
          </div>

          {/* ********************************************************** */}

          <div className="p-0" style={{ width: "100%" }}>
            <div>
              <div className="d-flex flex-wrap-reverse justify-content-between">
                <div
                  className="steps d-flex-column"
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
                <div className="daysDiv" style={{ marginRight: "17%" }}  value={chartGoal.daysLeft} id={chartGoal.daysLeftHalf} onChange= {value => handleDeadlineNotice(value)}>
                  <div className="badge days d-flex">
                    {chartGoal.completeFull === true ? 
                      <img style={{width: "35px", height: "35px", marginRight: "28px"}}
                      src={badge}
                      alt="Badge"/>
                    : null}
                    {chartGoal.daysLeft ? 
                      <h3 value={chartGoal.daysLeft} id={chartGoal.daysLeftHalf} onChange={value => handleDeadlineNotice(value)}
                        className="text-success text-center mr-1 mb-3" >
                        Days Left: {chartGoal.daysLeft}
                      </h3>
                    : null}
                  </div>
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
