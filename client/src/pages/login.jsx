function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    if (username !== 'admin' || password !== 'password123') {
        
    }

}