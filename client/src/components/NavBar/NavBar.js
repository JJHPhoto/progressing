import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import LogoutButton from "../LogoutButton";
import "./style.css";
import {Link} from "react-router-dom";

function NavBar() {

  return (
    <div>
      <Navbar bg="success" variant="dark">
      <NavDropdown title="Progressing" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/home" style={{ textDecoration: 'none', color: 'black'}}>Home</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/creategoal" style={{ textDecoration: 'none', color: 'black'}}>Create Goal</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
      </NavDropdown>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">UserName</a>
          </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
