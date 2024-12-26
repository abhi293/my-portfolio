// Optional: Add smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // scripts.js
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section-content');
    const viewportHeight = window.innerHeight;
  
    sections.forEach(section => {
      const positionFromTop = section.getBoundingClientRect().top;
  
      if (positionFromTop - viewportHeight <= 0) {
        section.classList.add('visible');
      }
    });
  });

// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const skillCircles = document.querySelectorAll(".skill-circle");
  
    skillCircles.forEach(function(circle) {
      const percent = circle.getAttribute("data-percent");
      circle.style.setProperty("--percent", `${percent}%`);
    });
  });

// Sparkling Tail Effect for Cursor
document.addEventListener("mousemove", function (e) {
    let cursorX = e.pageX;
    let cursorY = e.pageY;
  
    // Create multiple sparkles that follow the cursor and fade
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);
  
    // Position sparkle slightly behind the cursor
    sparkle.style.left = `${cursorX - 10}px`; // offset the sparkle to appear behind
    sparkle.style.top = `${cursorY - 10}px`;
  
    // Set random RGB colors for sparkle
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    sparkle.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  
    // Remove sparkle after animation ends (1 second in this case)
    setTimeout(function () {
      sparkle.remove();
    }, 1000);
  });
  
  // Scroll Animation Effect
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', function () {
    sections.forEach(function (section) {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (sectionPosition < screenPosition) {
        section.classList.add('section-visible');
      } else {
        section.classList.remove('section-visible');
      }
    });
  });



  