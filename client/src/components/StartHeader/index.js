import React from "react";
import Banner from "../photos/ProgBannerFull.jpg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function StartHeader() {
  return (
    <Link to="/home">
      {" "}
      <Image src={Banner} />{" "}
    </Link>
  );
}
