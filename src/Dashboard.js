import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';

import { UserContext } from './UserContext';

export default function Dashboard() {
  const { user, users, switchDelete, logout } = useContext(UserContext);

  return (
    <>
      <h1>Welcome to Brolim student dashboard, {user}</h1>
      <Button variant="primary" onClick={logout}>
        Logout  
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Is Admin</th>
            <th>Soft Delete</th>
            <th>Delete</th>
          </tr> 
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.isAdmin.toString()}</td>
            <td>{user.softDelete.toString()}</td>
            <td>
              <Button variant="danger" onClick={() => switchDelete(user.username)}>
                {user.softDelete ? 'Undelete' : 'Delete'}
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  )
}