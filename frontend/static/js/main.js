document.addEventListener('DOMContentLoaded', function () {
  const mobileToggle = document.getElementById('mobileToggle');
  const navList = document.getElementById('navList');
  const navLinks = document.querySelectorAll('.nav-list a');

  mobileToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navList.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
      navList.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Header background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    header.style.background =
      window.scrollY > 100 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)';
  });

  // Lazy loading fallback
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      observer.observe(img);
    });
  }

  // Animation on scroll
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  });

  document.querySelectorAll('.card, .gallery-item, .reviews-item').forEach(el => {
    animateOnScroll.observe(el);
  });
});