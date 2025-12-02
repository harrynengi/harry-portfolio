// ==================== REGISTER ====================
if (document.getElementById("registerForm")) {

    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const user = {
            name: name,
            email: email,
            password: password
        };

        // Save user in LocalStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration successful! You can now log in.");
        window.location.href = "login_page.html";
    });
}



// ==================== LOGIN ====================
if (document.getElementById("loginForm")) {

    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        // Authentication Check
        if (email === storedUser.email && password === storedUser.password) {
            alert("Login successful!");
            window.location.href = "/HTML/dashboard.html";  // redirect
        } else {
            alert("Incorrect email or password.");
        }
    });
}