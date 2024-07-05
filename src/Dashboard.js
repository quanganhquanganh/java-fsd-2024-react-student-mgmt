import React from 'react';
import { Button, Table, Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';


export default function Dashboard() {
  const { user, users } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  const handleSwitchDelete = (username) => {
    dispatch({ type: 'SWITCH_DELETE', payload: username });
  }

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
              <Nav.Link href="#users" active>Users</Nav.Link>
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            </Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <PersonCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>{user}</Dropdown.Header>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1>Welcome to Brolim Admin Dashboard, {user}</h1>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Username</th>
              <th>Is Admin</th>
              <th>Soft Delete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.isAdmin.toString()}</td>
                <td>{user.softDelete.toString()}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleSwitchDelete(user.username)}>
                    {user.softDelete ? 'Undelete' : 'Delete'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}