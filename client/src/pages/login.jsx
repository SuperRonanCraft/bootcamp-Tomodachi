import LoginForm from '../components/LoginForm';
// Function to validate the login form
export default function Login() {
  return (
    //   function validateForm() {
    //     // Get the value of the username input field
    //     var username = document.getElementById('username').value;
    //     // Get the value of the password input field
    //     var password = document.getElementById('password').value;
    //     // Get the error message element to display validation messages
    //     var errorMessage = document.getElementById('error-message');

    //     // Clear any previous error messages
    //     errorMessage.textContent = '';

    //     // Check if either the username or password fields are empty
    //     if (username === '' || password === '') {
    //       // If either field is empty, display an error message
    //       errorMessage.textContent = 'All fields are required.';
    //       // Prevent the form from being submitted
    //       return false;
    //     }

    //     // Check if the username and password match the hardcoded credentials
    //     if (username !== 'admin' || password !== 'password123') {
    //       // If the credentials do not match, display an error message
    //       errorMessage.textContent = 'Invalid username or password.';
    //       // Prevent the form from being submitted
    //       return false;
    //     }

    //     // If the credentials are valid, display a success message
    //     alert('Login successful!');
    //     // Allow the form to be submitted
    //     return true;
    //   }
    <>
      <LoginForm />
    </>
  );
}
