import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import LogoutButton from "../LogoutButton";
import "./style.css";
import {Link} from "react-router-dom";
import { useIsAuthenticated, useAuthenticatedUser } from "../../utils/auth";

function NavBar() {

  const user = useAuthenticatedUser();

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
            Signed in as: <Link to="/home" style={{ textDecoration: 'none', color: 'white'}} >{user.email}</Link>
          </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
