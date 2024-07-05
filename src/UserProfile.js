import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Button } from "react-bootstrap";

export default function UserProfile() {
    const { user, logout } = useContext(UserContext);
    return (
      <>
        <h1>Welcome to Brolim, {user}</h1>
        <p>You have finished all your courses.</p>
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      </>
    )
}
