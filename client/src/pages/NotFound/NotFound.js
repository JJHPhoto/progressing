import React from "react";
import { Container } from "react-bootstrap";
import ProgFooter from "../../components/Footer";
import {StartHeader} from "../../components/StartHeader";

function NotFound () {
    return (
        <Container>
           <StartHeader/>
            <h1 className="text-center">404</h1> 
            <h2 className="text-center">Page not found!</h2>
            <ProgFooter />
        </Container>
)
}

export default NotFound;