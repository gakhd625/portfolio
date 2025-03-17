// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message beamed to the future!');
    e.target.reset();
});

// Scroll animation observer
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`Section ${entry.target.id} is now visible!`);
            entry.target.classList.add('visible');

            // Animate child elements with delay
            const skills = entry.target.querySelectorAll('.skill');
            skills.forEach((skill, index) => {
                skill.style.transitionDelay = `${index * 0.2}s`;
            });

            const items = entry.target.querySelectorAll('.portfolio-item, .cert-item, .experience-item, .achievement-item','icon-container-item');
            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.2}s`;
            });

            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });
document.querySelectorAll('.scroll-section').forEach(section => {
    console.log(`Observing section: ${section.id}`);
    observer.observe(section);
});