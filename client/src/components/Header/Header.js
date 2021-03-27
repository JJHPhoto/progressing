import React from "react";
import Banner from "../photos/ProgBannerFull.jpg";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

export function Header() {
  return (
    <Container>
      <Link to="/home">
        {" "}
        <Image src={Banner} fluid />{" "}
      </Link>
    </Container>
  );
}
