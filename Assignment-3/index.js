function login() {
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  // Simple validation (you can replace with API call later)
  if (phone === '9876543210' && password === 'admin123') {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid phone number or password.';
  }
}
