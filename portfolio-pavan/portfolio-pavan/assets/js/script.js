'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});











document.addEventListener("DOMContentLoaded", () => {
  const skillsItems = document.querySelectorAll('.skills-item');

  // Function to animate progress bars and percentage numbers
  const animateSkills = (entry) => {
    const skill = entry.target;
    const progressBar = skill.querySelector('.skills-progress');
    const skillData = skill.querySelector('.skills-data');
    const progressWidth = skillData.getAttribute('value');

    // Trigger the progress bar width transition
    progressBar.style.width = `${progressWidth}%`;

    // Animate the percentage text
    let currentValue = 0;
    const targetValue = parseInt(progressWidth, 10);
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue++;
        skillData.textContent = `${currentValue}%`;
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the speed of number increment
  };

  // IntersectionObserver to trigger animations on scroll
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills(entry); // Start animation
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  // Observe each skills item
  skillsItems.forEach(skill => {
    observer.observe(skill);
  });
});
