/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import LogoutButton from "../LogoutButton";
import "./style.css";
import {Link, NavLink} from "react-router-dom";
import { useAuthenticatedUser } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisH,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const user = useAuthenticatedUser();

  return (
    <div className="header">
      <Navbar variant="dark">

      <NavDropdown title={<FontAwesomeIcon icon={faBars}/>} id="basic-nav-dropdown">

        <NavDropdown.Item as={Link} to="/home" style={{ textDecoration: 'none', color: 'black'}}>
          Home
        </NavDropdown.Item>

        <NavDropdown.Item as={Link} to="/creategoal" style={{ textDecoration: 'none', color: 'black'}}>
          Create Goal
        </NavDropdown.Item>

        <NavDropdown.Item as={Link} to="/about" style={{ textDecoration: 'none', color: 'black'}}>
          About Us
        </NavDropdown.Item>

        <NavDropdown.Item as={Link} to="/howto" style={{ textDecoration: 'none', color: 'black'}}>
          How To
        </NavDropdown.Item>

        <NavDropdown.Item as={Link} to="/developers" style={{ textDecoration: 'none', color: 'black'}}>
          Developers
        </NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item>
          <LogoutButton />
        </NavDropdown.Item>
      </NavDropdown>
        <Navbar.Collapse className="justify-content-end">
          {user &&
          <Navbar.Text>
            Welcome, <Link as={Link} to="/home" style={{ textDecoration: 'none', color: 'white'}} >{user.firstName}!</Link>
          </Navbar.Text>}

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
