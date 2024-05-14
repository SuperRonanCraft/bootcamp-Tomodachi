import { useState } from 'react';
import { useMutation } from '@apollo/client';
import AuthService from './utils/auth';
import React from 'react';
import { LOGIN_USER } from './utils/mutations';
// Add login mutation here

const LoginForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  //LOGIN_USER Mututation for logging in and checking for errors
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  //If login is successful handle form submission
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });

      AuthService.login(data.login.token); // Assuming your auth module handles login token
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  //A react form for the user to fill out that we will export from this page
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="username"
        id="username"
        name="username"
        value={formState.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="password"
        id="password"
        name="password"
        value={formState.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Log in'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default LoginForm;
