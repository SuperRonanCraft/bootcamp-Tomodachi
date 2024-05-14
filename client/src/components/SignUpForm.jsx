import { useState } from 'react';
import { useMutation } from '@apollo/client';
import AuthService from './utils/auth';
import React from 'react';
import { SIGN_UP_USER } from './utils/mutations';

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signUpUser, { loading, error }] = useMutation(SIGN_UP_USER);

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
      const { data } = await signUpUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });

      AuthService.login(data.signUp.token);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
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
        {loading ? 'Signing up...' : 'Sign up'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default SignUpForm;
