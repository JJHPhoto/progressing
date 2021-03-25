import React from "react";
import { Card } from "react-bootstrap";

function Chart(props) {
  return (
    <div>
      {/* {console.log("charts", props)} */}
      <Card className="bg-dark"  style={{height: "220px"}}>
        <Card.Body>
          {/* <Card.Header className="mb-2 pb-2 bg-dark"> */}
              <h1 className="text-white text-center mb-5">{props.chartGoal.title}</h1>
          {/* </Card.Header> */}
          {/* <br /> */}
          <Card.Subtitle className="mb-2 text-white text-left" style={{marginLeft: "100px"}}>
            Description:
          </Card.Subtitle>
          <Card.Text className="text-white text-left" style={{marginLeft: "100px"}}>{props.chartGoal.description}</Card.Text>
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default Chart;
