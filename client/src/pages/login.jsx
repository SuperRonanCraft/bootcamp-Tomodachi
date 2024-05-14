// Function to validate the login form
function validateForm() {
    // Get the value of the username input field
    var username = document.getElementById('username').value;
    // Get the value of the password input field
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    if (username !== 'admin' || password !== 'password123') {
        errorMessage.textContent = 'Invalid username or password.';
        return false;
    }

    alert('Login successful!');
    return true;
}