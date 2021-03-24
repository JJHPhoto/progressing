import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgressingBanner.png";
import {Link} from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="mt-4 mb-4">
          <Link to="/home"><Card.Img variant="top" src={Banner} /></Link>
        </div>
    </>
    )
}
