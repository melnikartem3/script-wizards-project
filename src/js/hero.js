const headerSection = document.querySelector('.hero-title');

headerSection.addEventListener('animationend', function() {
  headerSection.classList.remove('animate__animated', 'animate__fadeInUp');
});
