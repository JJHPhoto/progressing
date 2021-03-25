import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgBannerFull.jpg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function Header() {
  return (
    <Link to="/home">
      {" "}
      <Image src={Banner} fluid />{" "}
    </Link>
    // <Card >
    //   <Link to="/home"><Card.Img variant="top" src={Banner} /></Link>
    // </Card>
  );
}
