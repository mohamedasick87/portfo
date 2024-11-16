document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Set initial state based on body class
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        themeToggle.textContent = 'Switch to Dark Mode';
    }

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



document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeText = document.querySelector('.welcome-message');

    // Split the welcome text into individual characters
    const welcomeTextContent = welcomeText.textContent;
    welcomeText.innerHTML = '';

    // Wrap each character in a span for animation
    [...welcomeTextContent].forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        welcomeText.appendChild(span);

        // Apply animation delay for each letter
        span.style.animationDelay = `${index * 0.2}s`;
    });

    // Wait for the animation to complete, then remove the welcome screen
    setTimeout(() => {
        welcomeScreen.style.animation = 'fadeOut 1s forwards';
    }, 2000); // Keep welcome screen for 2 seconds

    // Show main content after the welcome screen fades out
    setTimeout(() => {
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Adjust to match the fade-out animation
});

//pop up message for phone icon
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
//finished

//navbaar issue
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Collapse the navbar on mobile view after clicking a link
                if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                    navbarCollapse.classList.remove("show");
                }
            });
        });
    });
//navbar issue .

//photo icon issue
function toggleFlip() {
    const flipCard = document.getElementById("flipCard");
    flipCard.classList.toggle("flipped");
}

//return to back form of photo
// Reapply the animation class to the heading
function triggerCoolAnimation() {
    const heading = document.querySelector('.cool-animated-heading');
    heading.classList.remove('cool-animated-heading'); // Remove the class
    void heading.offsetWidth; // Trigger reflow
    heading.classList.add('cool-animated-heading'); // Reapply the class
}

// Example: Trigger animation on flip card
document.querySelector('#flipCard').addEventListener('click', triggerCoolAnimation);

//photo issue solved