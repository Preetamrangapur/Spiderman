document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "admin@example.com" && password === "admin123") {
        message.textContent = "Login successful";
    } else {
        message.textContent = "Invalid email or password";
    }
});