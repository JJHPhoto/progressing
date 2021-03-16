import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgressingBanner.jpg";

export function Header() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={Banner} />
      </Card>
    </>
  );
}
