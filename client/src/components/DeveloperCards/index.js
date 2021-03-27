import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
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
        <ListGroupItem>
          <Card.Link>{props.github}</Card.Link>
          <Card.Link>{props.linkedin}</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
          <Card.Link>{props.portfolio}</Card.Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default DeveloperCards;
