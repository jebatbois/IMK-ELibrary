const container = document.getElementById('booksContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollAmount = 250;

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.password-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
        });
    });
});

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
