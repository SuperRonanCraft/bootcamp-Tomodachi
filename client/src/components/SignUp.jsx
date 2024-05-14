import { useState } from 'react';
import { useMutation } from '@apollo/client';

const SignupForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [signupUser, { loading, error }] = useMutation(SIGNUP_USER);

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
      const { data } = await signupUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });
      console.log('Signup successful:', data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

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
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign up'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default SignupForm;
