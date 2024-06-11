
const navLinks = document.querySelectorAll('.nav-tab');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.getAttribute('href').slice(1);


    const target = document.getElementById(id);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});
