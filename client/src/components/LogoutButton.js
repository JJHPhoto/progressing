import React from "react";
import { Button } from "react-bootstrap";
import { useLogout } from "../utils/auth";


function LogoutButton() {

    const logout = useLogout();

    return <Button variant="success" onClick={logout}>Logout</Button>

}

export default LogoutButton;