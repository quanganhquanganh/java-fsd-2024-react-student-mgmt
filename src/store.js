import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAdmin: false,
  users: [
    { username: 'user123', password: '456', isAdmin: false, softDelete: false },
    { username: 'admin', password: '123', isAdmin: true, softDelete: false },
    { username: 'user', password: '789', isAdmin: false, softDelete: false },
    { username: 'user2', password: '012', isAdmin: false, softDelete: false },
    { username: 'user3', password: '345', isAdmin: false, softDelete: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { username, password } = action.payload;
      const user = state.users.find(u => u.username === username && u.password === password && !u.softDelete);
      if (user) {
        return {
          ...state,
          user: username,
          isAdmin: user.isAdmin
        };
      } else {
        return state;
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAdmin: false
      };
    case 'SWITCH_DELETE':
      return {
        ...state,
        users: state.users.map(user => 
          user.username === action.payload
            ? { ...user, softDelete: !user.softDelete }
            : user
        )
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer
});

export default store;