const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{6,}$/;

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username.value.trim().length < 8) {
      usernameError.textContent = "Username must be at least 8 characters.";
      isValid = false;
    }

    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!passwordRegex.test(password.value.trim())) {
      passwordError.textContent =
        "Password must be at least 6 characters with uppercase, lowercase, number, and special character.";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userEmail", email.value.trim());
      localStorage.setItem("userPassword", password.value.trim());
      console.log("Redirecting to login.html...");
      alert("Signup successful! You can now log in.");

      window.location.href = "./login.html";
    }
  });
