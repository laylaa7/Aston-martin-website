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

// const loginForm = document.querySelector("#popup form");
// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   if (username === "admin@gmail.com" && password === "123") {
//     window.location.href = '/src/views/adminLandingPage.html';
 
//   } else if (username === "abood@gmail.com") {
//     alert(
//       "Sorry, you can’t access this. Please try contacting AstonMartin@gmail.com"
//     );
//   } else {
//     // Handle other usernames
//     alert("Invalid username.");
//   }
// });

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateInputs();
// });

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  // const usernameValue = username.value.trim();
  // const emailValue = email.value.trim();
  // const passwordValue = password.value.trim();
  // const password2Value = password2.value.trim();

  // if (usernameValue === "") {
  //   setError(username, "Username is required");
  // } else {
  //   setSuccess(username);
  // }

  // if (emailValue === "") {
  //   setError(email, "Email is required");
  // } else if (!isValidEmail(emailValue)) {
  //   setError(email, "Provide a valid email address");
  // } else {
  //   setSuccess(email);
  // }

  // if (passwordValue === "") {
  //   setError(password, "Password is required");
  // } else if (passwordValue.length < 8) {
  //   setError(password, "Password must be at least 8 character.");
  // } else {
  //   setSuccess(password);
  // }

  // if (password2Value === "") {
  //   setError(password2, "Please confirm your password");
  // } else if (password2Value !== passwordValue) {
  //   setError(password2, "Passwords doesn't match");
  // } else {
  //   setSuccess(password2);
  // }
  // if (password == password2) {
  //   alert("Welcome!");
  // } else {
  //   alert("Your confirm password has to match your password");
  // }
  document.addEventListener("DOMContentLoaded", function () {
    const signupLink = document.getElementById("signupLink");
    const signupPopup = document.getElementById("signupPopup");
    const closeBtn = signupPopup.querySelector(".close");

    // Add event listener to open signup popup when signup link is clicked
    signupLink.addEventListener("click", function (event) {
      event.preventDefault();
      signupPopup.style.display = "block";
    });

    // Add event listener to close signup popup when close button is clicked
    closeBtn.addEventListener("click", function () {
      signupPopup.style.display = "none";
    });
  });
};
document.getElementById("signup-btn").onclick = function () {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  console.log(username.value + 'im here ')

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  if (password == password2) {
    alert("Welcome!");
  } else {
    alert("Your confirm password has to match your password");
  }
};

loginSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  /* const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin@gmail.com" && password === "123") {
    // window.location.href = '/admin/';
    popup.style.display = "none";
  } else if (username === "abood@gmail.com") {
    alert(
      "Sorry, you can’t access this. Please try contacting AstonMartin@gmail.com"
    );
  } else {
    alert("Invalid username.");
  } */
  loginBtn.classList.add("hidden");
});

// Add event listener to the close button
closeBtn.addEventListener("click", function () {
  // Close the popup window by hiding it
  popup.style.display = "none";
});


 
