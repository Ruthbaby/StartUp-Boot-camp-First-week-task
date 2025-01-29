// script.js
document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); //To Prevent default form submission

    // Basic validation (add more as needed)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
      alert('Password do not match.');
      return;
    }
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !terms
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // If validation passes, pop up the actual submission logic)
    alert('Sign-up Successful!');
    this.reset(); // Clear the form
  });
