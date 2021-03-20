import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BarChart from "../BarChart";

function Chart(props) {
  return (
    <div className="mt-4">
      {/* {console.log("charts", props)} */}
      <Card mt-2>
        <Card.Body>
          <Card.Header className="bg-success" mb-2 pb-2>
            <Link
              className="text-white"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{props.chartGoal.title}</h3>
            </Link>
          </Card.Header>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Description:
          </Card.Subtitle>
          <Card.Text>{props.chartGoal.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Notes:</Card.Subtitle>
          <Card.Text>{props.chartGoal.notes}</Card.Text>
        </Card.Body>
        <BarChart />
      </Card>
    </div>
  );
}

export default Chart;
