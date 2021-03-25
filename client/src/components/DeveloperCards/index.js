import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import { FaMobile } from "react-icons/fa";
import "./style.css";

function DeveloperCards(props) {
  return (
    <Card className="my-3" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <h3>{props.name}</h3>
        </Card.Title>
        <Card.Text>{props.title}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.description}</ListGroupItem>
        <ListGroupItem>Project Role: {props.role}</ListGroupItem>
        {/* <ListGroupItem>
          {" "}
          <FaMobile /> {props.phone}
        </ListGroupItem> */}
      </ListGroup>
      <Card.Body>
        <Card.Link>{props.github}</Card.Link>
        <Card.Link>{props.linkedin}</Card.Link>
      </Card.Body>
    </Card>

    // <div className="dev-card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>{props.name}</li>
    //       <li>{props.title}</li>
    //       <li>
    //         <h4> Team Role:</h4> {props.role}
    //       </li>
    //       <li>{props.description}</li>
    //       <li>
    //         {props.github} {props.linkedin}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default DeveloperCards;
