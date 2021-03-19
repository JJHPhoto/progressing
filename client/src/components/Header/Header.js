import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgressingBanner.jpg";
import {Link} from "react-router-dom";

export function Header() {
  return (
    <>
      <Card >
        <Link to="/home"><Card.Img variant="top" src={Banner} /></Link>
      </Card>
    </>
  );
}
