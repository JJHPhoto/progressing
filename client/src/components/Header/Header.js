import React from "react";
import Banner from "../photos/ProgBannerCrop.jpg";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import { authorize } from "passport";

export function Header() {
  return (
    <Container className="mb-4">
      <Link to="/home">
        {" "}
        <Image
          src={Banner}
          fluid
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      </Link>
    </Container>
  );
}
