import React, { createContext, useState } from 'react';

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

export const UserContext = createContext();

export const UserProvider = ( {children} ) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState(fakeUsers);

  const checkAdmin = (username) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].isAdmin;
      }
    }
  }

  const switchDelete = (username) => {
    const newUsers = users.map( user => {
      if (user.username === username) {
        user.softDelete = !user.softDelete;
      }
      return user;
    });
    setUsers(newUsers);
  };

  const login = (username, password) => {
    if (users.some(user => user.username === username && user.password === password && !user.softDelete)) {
      setUser(username);
      setIsAdmin(checkAdmin(username));
    } else {
      alert('I don\'t know you!');
    }
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={ {user, users, login, logout, switchDelete, isAdmin} }>
      {children}
    </UserContext.Provider>
  );
}
