import React, { useContext } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './Login.js';
import { UserContext } from './UserContext.js';
import UserProfile from './UserProfile.js';
import Dashboard from './Dashboard.js';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const { user, isAdmin } = useContext(UserContext);

  return (
    <div className='w-100 mx-0'>
      <Routes>
        <Route path="/" element={
          user ? (
            isAdmin ? <Navigate to="/dashboard" /> : <Navigate to="/profile" />
          ) : (
            <Login />
          )
        } />
        <Route path="/profile" element={
          user && !isAdmin ? <UserProfile /> : <Navigate to="/" />
        } />
        <Route path="/dashboard" element={
          user && isAdmin ? <Dashboard /> : <Navigate to="/" />
        } />
      </Routes>
    </div>
  );
}

export default App;