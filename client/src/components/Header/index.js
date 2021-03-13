import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../../assets/images/ProgressingBanner.jpg";

export function Header() {

    return (
        <>
        <Card>
      <Card.Img variant="top" src={Banner} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    )
}
