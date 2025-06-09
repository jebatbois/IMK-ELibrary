const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("passwordField");
const toggleIcon = document.getElementById("toggleIcon");

togglePassword.addEventListener("click", () => {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  if (type === "text") {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
});

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const toggleConfirmIcon = document.getElementById("toggleConfirmIcon");

toggleConfirmPassword.addEventListener("click", () => {
  const type =
    confirmPasswordField.getAttribute("type") === "password"
      ? "text"
      : "password";
  confirmPasswordField.setAttribute("type", type);
  if (type === "text") {
    toggleConfirmIcon.classList.remove("fa-eye-slash");
    toggleConfirmIcon.classList.add("fa-eye");
  } else {
    toggleConfirmIcon.classList.remove("fa-eye");
    toggleConfirmIcon.classList.add("fa-eye-slash");
  }
});
