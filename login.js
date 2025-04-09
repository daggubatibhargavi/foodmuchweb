document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    const signUpEmail = localStorage.getItem("userEmail");
    const signUpPassword = localStorage.getItem("userPassword");

    document.getElementById("loginEmailErrMsg").textContent = "";
    document.getElementById("loginPasswordErrMsg").textContent = "";

    if (loginEmail !== signUpEmail) {
      document.getElementById("loginEmailErrMsg").textContent =
        "Email not found. Please sign up first.";
      return;
    }

    if (loginPassword !== signUpPassword) {
      document.getElementById("loginPasswordErrMsg").textContent =
        "Incorrect password.";
      return;
    }

    alert("Login successful!");
    window.location.href = "./index.html";
  });
