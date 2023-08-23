let user = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let retype = document.querySelector("#retype");
let submit = document.querySelector("#submitbtn");
let form = document.querySelector("form");
// let togglePassword = document.querySelector("#togglePassword");
let eyeIcon = document.querySelector("#eyeIcon");

eyeIcon.addEventListener("click", () => {
  if (retype.type === "password") {
    retype.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    retype.type = "password";

    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let userValue = user.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let retypeValue = retype.value.trim();

  if (userValue === "") {
    setErrorFor(user, "Username cannot be blank");
  } else {
    setSuccessFor(user);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, "Password must be strong");
  } else {
    setSuccessFor(password);
  }

  if (retypeValue === "") {
    setErrorFor(retype, "Please retype password to confirm");
  } else if (passwordValue !== retypeValue) {
    setErrorFor(retype, "password doesn't match");
  } else {
    setSuccessFor(retype);
  }
  if (setErrorFor) {
    eyeIcon.style.display = "none";
  } else {
    eyeIcon.style.display = "block";
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form_control error";
  small.innerText = message;
}
function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form_control success";
}

function isEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/.test(email);
}

function isPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
}
