import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "./style.css";

function NavBar() {
  return (
    <div>
      <Navbar>
        <Button variant="success">Life Goals</Button>
        <Button variant="success">Options</Button>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">User's Name </a>
          </Navbar.Text>
          <Button variant="success">
            {" "}
            Logut <RiLogoutCircleRLine />
          </Button>{" "}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
