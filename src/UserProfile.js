import React from "react";
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
  const { user, logout } = useContext(UserContext);

  return (
    <Container fluid className="p-0">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img alt="logo" src="brolimlogo.png" className="rounded-circle" width={"60"}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#learning-paths" active>Learning Path(s)</Nav.Link>
              <Nav.Link href="#courses">Course(s)</Nav.Link>
            </Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <PersonCircle size={24} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>{user}</Dropdown.Header>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
