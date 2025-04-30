// Toggle tile menu
document.querySelector(".menu-orb").addEventListener("click", () => {
  document.querySelector(".tile-menu").classList.toggle("active");
});

document.querySelector(".menu-orb").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    document.querySelector(".tile-menu").classList.toggle("active");
  }
});

document.querySelector(".tile-menu-back").addEventListener("click", () => {
  document.querySelector(".tile-menu").classList.remove("active");
});

document.querySelector(".tile-menu-back").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    document.querySelector(".tile-menu").classList.remove("active");
  }
});

// Close tile menu when a link is clicked
document.querySelectorAll(".tile-menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".tile-menu").classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Typewriter effect
const typewriterText = "I’m Gerlie Ann Katherine Daga-as";
const typewriterElement = document.querySelector(".about-text h2");
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterElement.innerHTML =
      typewriterText.slice(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, 100);
  } else {
    typewriterElement.innerHTML = typewriterText;
  }
}

window.addEventListener("load", () => {
  if (typewriterElement) typeWriter();
});

// Custom cursor with particles
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  // Create particle
  if (Math.random() < 0.2) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
});

// Constellation interaction
document.querySelectorAll(".constellation").forEach((constellation) => {
  constellation.addEventListener("click", () => {
    const message = constellation.dataset.message;
    const messageEl = document.createElement("div");
    messageEl.classList.add("constellation-message");
    messageEl.textContent = message;
    constellation.appendChild(messageEl);
    setTimeout(() => messageEl.remove(), 3000);
  });
});

// Dark/Light mode toggle
const themeToggle = document.querySelector(".theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.innerHTML = `<i class="fas fa-${
  currentTheme === "dark" ? "moon" : "sun"
}"></i>`;

themeToggle.addEventListener("click", () => {
  const newTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.innerHTML = `<i class="fas fa-${
    newTheme === "dark" ? "moon" : "sun"
  }"></i>`;
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.target.querySelector(".cta-btn");
  const loading = e.target.querySelector(".loading");

  button.disabled = true;
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    button.disabled = false;
    alert("Message sent to the cosmos!");
    e.target.reset();
  }, 2000);
});

// Scroll animation observer
const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`Section ${entry.target.id} is now visible!`);
      entry.target.classList.add("visible");

      // Animate child elements with delay
      const items = entry.target.querySelectorAll(
        ".portfolio-item, .cert-item, .experience-item, .testimonial-item, .icon-container-item"
      );
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
      });

      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });
document.querySelectorAll(".scroll-section").forEach((section) => {
  console.log(`Observing section: ${section.id}`);
  observer.observe(section);
});
