// Load content dynamically
document.addEventListener("DOMContentLoaded", function() {
  const contentDiv = document.getElementById("content");

  // Function to load page content
  function loadPage(page) {
    fetch(`./pages/${page}.html`)
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        if (page === "login") {
          setupLoginForm();
        }
      })
      .catch((error) => console.error("Error loading page:", error));
  }

  // Set default page (home)
  loadPage("home");

  // Add event listener to all navbar links
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Function to set up login form validation
  function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent actual form submission

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const errorDiv = document.getElementById("loginError");

      if (username === "" || password === "") {
        errorDiv.textContent = "Both fields are required!";
        errorDiv.style.display = "block";
      } else if (password.length < 6) {
        errorDiv.textContent = "Password must be at least 6 characters long!";
        errorDiv.style.display = "block";
      } else {
        errorDiv.style.display = "none";
        alert("Login successful!");
        // Here you can redirect or handle login success logic
      }
    });
  }
});
