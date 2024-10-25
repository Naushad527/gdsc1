document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (you can replace this with actual authentication logic)
    if (username === 'user' && password === 'password') {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
});
