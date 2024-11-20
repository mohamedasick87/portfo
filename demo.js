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

//welcome screen start

const moon = document.querySelector('.moon');
const letters = document.querySelectorAll('.welcome-message span');

// Total animation duration of the moon
const animationDuration = 4; // seconds
const letterRevealDelay = animationDuration / letters.length; // Time for the moon to cross each letter

// Reveal letters as the moon crosses them
letters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.opacity = '1'; // Make the letter visible
    }, index * letterRevealDelay * 1000); // Convert seconds to milliseconds
});

// Make the moon disappear after crossing the final letter
setTimeout(() => {
    moon.style.animation = 'moonFadeOut 0.5s forwards'; // Fade out the moon
}, animationDuration * 1000);

// Optional: Hide the welcome screen after the animation
setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
}, (animationDuration + 0.5) * 1000); // Wait for fade-out to complete
//welcome screen ends

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