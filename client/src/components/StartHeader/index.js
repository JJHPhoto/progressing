import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgBannerFull.jpg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function StartHeader() {
  return (
    <Link to="/home">
      {" "}
      <Image src={Banner} />{" "}
    </Link>
    // <Card className="mt-4 mb-4">
    //   <Link to="/"><Card.Img variant="top" src={Banner} /></Link>
    // </Card>
  );
}
