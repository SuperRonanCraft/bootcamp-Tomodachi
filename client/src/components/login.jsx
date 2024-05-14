import { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../../../server/utils/auth';
import React from 'react';
// Add login mutation here

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  //TODO: LOGIN_USER Mututation for logging in and checking for errors
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  //TODO: If login is successful handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email: formState.email, password: formState.password },
      });

      auth.login(data.login.token); // Assuming your auth module handles login token
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  //TODO: a react form for the user to fill out that we will export from this page
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
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
