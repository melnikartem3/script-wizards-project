document.addEventListener('DOMContentLoaded', function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollIcon = scrollTopBtn.querySelector('.scroll-icon');
  const aboutSection = document.getElementById('about-me');

  let isScrollIconAnimating = false;

  window.addEventListener('scroll', function () {
    if (!isScrollIconAnimating) {
      const aboutSectionTop = aboutSection.offsetTop;
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > aboutSectionTop) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    if (!isScrollIconAnimating) {
      isScrollIconAnimating = true;

      window.scrollTo(0, 0);

      scrollTopBtn.classList.add('scroll-icon-active');

      scrollIcon.addEventListener(
        'animationend',
        function animationEndHandler() {
          scrollTopBtn.classList.remove('scroll-icon-active');

          scrollIcon.style.transform = 'translateY(0)';

          isScrollIconAnimating = false;

          scrollIcon.removeEventListener('animationend', animationEndHandler);
        }
      );
    }
  });

  scrollTopBtn.addEventListener('mouseenter', function () {
    if (!isScrollIconAnimating) {
      scrollIcon.style.transform = 'translateY(0)';
    }
  });

  scrollTopBtn.addEventListener('focus', function () {
    if (!isScrollIconAnimating) {
      scrollIcon.style.transform = 'translateY(0)';
    }
  });

  function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
      const currentTime =
        'now' in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, -start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
  }
});
