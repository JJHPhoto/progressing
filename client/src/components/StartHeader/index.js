import React from "react";
import Card from "react-bootstrap/Card";
import Banner from "../photos/ProgressingBanner.jpg";
import {Link} from "react-router-dom";

export function StartHeader() {
  return (
    <>
     
        <div className="mt-4 mb-4">

        <Link to="/"><Card.Img variant="top" src={Banner} /></Link>
        
        </div>
      
    </>
  );
}