// script.js

// ===== MOBILE MENU =====
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// ===== TYPING EFFECT =====
const typed = new Typed(".typing", {
  strings: [
    "MCA Student",
    "AI / ML Engineer",
    "Data Science Enthusiast",
    "Python Developer"
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// ===== DARK LIGHT MODE =====
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
  else{
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  }
};

// ===== ACTIVE NAV LINK =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove("active");
      });

      document
      .querySelector("header nav a[href*=" + id + "]")
      .classList.add("active");
    }
  });
};
