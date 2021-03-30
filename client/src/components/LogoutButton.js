import React from "react";
import { Button } from "react-bootstrap";
import { useLogin, useLogout } from "../utils/auth";

function LogoutButton() {
  const logout = useLogout();
  const login = useLogin();

  return (
    <Button variant="success" onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
