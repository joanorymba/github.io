function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("All fields are required.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Thank you for your message!");
    return true;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  