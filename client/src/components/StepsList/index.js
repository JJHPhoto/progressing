import React from "react";
import "./style.css";
import { Card, Form } from "react-bootstrap";

function StepsList({ chartGoal }) {
  return (
    <>
      {chartGoal.steps.map((step) => {
        return (
          // <Card>
          <Form className="checklist m-5">
            <Form.Check
              className="milestone-header"
              type="checkbox"
              label={step.name}
            />
            <ul>
              {step.steps.map((step) => {
                return (
                  <Form.Check
                    className="steps-header"
                    type="checkbox"
                    label={step.name}
                  />
                );
              })}
            </ul>
          </Form>
          // </Card>
        );
      })}
    </>
  );
}

export default StepsList;
