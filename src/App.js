import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Login from './Login.js';

import 'bootstrap/dist/css/bootstrap.css'

const fakeUsers = [
  {
    username: 'user123',
    password: '456',
    isAdmin: false,
    softDelete: false,
  },
  {
    username: 'admin',
    password: '123',
    isAdmin: true,
    softDelete: false,
  },
  {
    username: 'user',
    password: '789',
    isAdmin: false,
    softDelete: false,
  },
  {
    username: 'user2',
    password: '012',
    isAdmin: false,
    softDelete: false,
  },
  {
    username: 'user3',
    password: '345',
    isAdmin: false,
    softDelete: false,
  }
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState(fakeUsers);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const checkAdmin = (username) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].isAdmin;
      }
    }
  }

  const handleLogin = (username, password) => {
    if (users.some(user => user.username === username && user.password === password && !user.softDelete)) {
      localStorage.setItem('user', username);
      setIsLoggedIn(true);
      setIsAdmin(checkAdmin(username));

    } else {
      alert('I don\'t know you!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const switchDelete = (username) => {
    const newUsers = users.map( user => {
      if (user.username === username) {
        user.softDelete = !user.softDelete;
      }
      return user;
    });
    setUsers(newUsers);
  };


  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
    setIsAdmin(checkAdmin(user));
  }, [isLoggedIn]);

  return (
    <div className='w-100 mx-0'>
          {isLoggedIn && !isAdmin ? (
            <>
              <h1>Welcome to Brolim, {localStorage.getItem('user')}</h1>
              <p>You have finished your courses.</p>
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : isLoggedIn && isAdmin ? (
            <>
            <h1>Admin Page</h1>
            <Button variant="primary" onClick={handleLogout}>
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
          ) : (
            <Login onLogin={handleLogin} />
          )}
    </div>
  );
}

export default App;
