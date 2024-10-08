// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute('href').substring(1); // Get target section ID
    const targetElement = document.getElementById(targetId); // Get the target element by ID

    // Scroll smoothly to the target section
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle Menu for Mobile View
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function () {
      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          themeToggle.textContent = 'Switch to Light Mode';
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          themeToggle.textContent = 'Switch to Dark Mode';
      }
  });
});

