document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    // Simulate login success
    alert("Login successful!");
    // Redirect or call real API here
  });
  