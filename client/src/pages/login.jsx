import React, { useState } from 'react';

const LoginForm = () => {
  // useState hook to manage the state of the username input field
  const [username, setUsername] = useState('');
  // useState hook to manage the state of the password input field
  const [password, setPassword] = useState('');
  // useState hook to manage the state of the error message
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate the form inputs
  const validateForm = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear any previous error messages
    setErrorMessage('');

    // Check if either the username or password fields are empty
    if (username === '' || password === '') {
      // If either field is empty, display an error message
      setErrorMessage('All fields are required.');
      return false; // Prevent the form from being submitted
    }

    // Check if the username and password match the hardcoded credentials
    if (username !== 'admin' || password !== 'password123') {
      // If the credentials do not match, display an error message
      setErrorMessage('Invalid username or password.');
      return false; // Prevent the form from being submitted
    }

    // If the credentials are valid, display a success message
    alert('Login successful!');
    return true; // Allow the form to be submitted
  };

}