
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
    const popup = document.getElementById("popup");
    popup.classList.add("show"); // Add the 'show' class to display the popup
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show"); // Remove the 'show' class to hide the popup
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

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // All sections with IDs
    const navLinks = document.querySelectorAll(".nav-link"); // Navbar links

    const observerOptions = {
        root: null, // Viewport
        threshold: 0.6, // 60% visibility
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Highlight the current section
                navLinks.forEach((link) => link.classList.remove("active"));
                if (navLink) navLink.classList.add("active");
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => observer.observe(section));
});

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
