const links = document.querySelectorAll('.nav-links, .header-order-link');
const navLinks = document.querySelectorAll('.nav-links');
const menuLink = document.querySelector('.nav-general-link');
const navList = document.querySelector('.nav-list');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}
function clickHandler(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
}

menuLink.addEventListener('click', function (event) {
  event.preventDefault();

  navLinks.forEach(link => {
    link.classList.toggle('show');
  });
});

navList.addEventListener('mouseover', function () {
  navLinks.forEach(navLink => {
    navLink.classList.add('show');
  });
});

navList.addEventListener('mouseout', function () {
  navLinks.forEach(navLink => {
    navLink.classList.remove('show');
  });
});
