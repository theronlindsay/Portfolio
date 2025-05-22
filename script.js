const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Scroll animations for portfolio cards
const portfolioCards = document.querySelectorAll('.portfolio-card');

const observerOptions = {
  root: null, // relative to document viewport 
  rootMargin: '0px',
  threshold: 0.1 // 10% of item has to be visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

portfolioCards.forEach(card => {
  observer.observe(card);
});
