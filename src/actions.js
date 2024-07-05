export const logout = () => ({
  type: 'LOGOUT'
});

export const switchDelete = (username) => ({
  type: 'SWITCH_DELETE',
  payload: username
});

export const login = (username, password) => ({
  type: 'LOGIN',
  payload: {
    username,
    password
  }
});
