import React from "react";
import { Card } from "react-bootstrap";

function Chart(props) {
  return (
    <div>
      {/* {console.log("charts", props)} */}
      <Card>
        <Card.Body>This is where we'll render our charts.
          {props.chartGoal.title}
          {props.chartGoal.description}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Chart;
