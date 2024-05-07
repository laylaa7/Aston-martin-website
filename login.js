const loginBtn = document.getElementById("loginBtn");
const popup = document.getElementById("popup");
const signupLink = document.getElementById("signupLink");
const closeBtns = document.querySelectorAll(".close");

loginBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signupPopup").style.display = "block";
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

const loginForm = document.querySelector("#popup form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  if (username === "malak@gmail.com") {
    alert("Welcome!");
  } else if (username === "abood@gmail.com") {
    alert(
      "Sorry, you can’t access this. Please try contacting AstonMartin@gmail.com"
    );
  } else {
    // Handle other usernames
    alert("Invalid username.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("username_error");
  const emailError = document.getElementById("email_error");
  const passwordError = document.getElementById("password_error");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    if (usernameInput.value.trim() === "") {
      // usernameError.textContent = "Username is required";
      valid = false;
    } else {
      usernameError.textContent = "";
    }

    if (emailInput.value.trim() === "") {
      // emailError.textContent = "Email is required";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (passwordInput.value.trim() === "") {
      // passwordError.textContent = "Password is required";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (valid) {
      // If all fields are valid, submit the form
      alert("Form submitted successfully!");
      signupForm.submit();
    }
    if (!username || !email || !password) {
      // Check if any field is empty
      alert("Username, email, and password are required.");
    } else {
      // All fields are filled, show welcome message
      alert("Welcome!");
    }
  });
});
