function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for saved user preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.className = savedTheme;
  }

  // Toggle dark mode
  toggleButton.addEventListener("click", function() {
    if (body.classList.contains("light-mode")) {
      body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  });
});
