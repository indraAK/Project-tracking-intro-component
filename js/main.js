const toggleMenu = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

toggleMenu.addEventListener('click', () => {
   toggleMenu.classList.toggle('active');
   mobileNav.classList.toggle('mobile-nav--open');

   const imgIcon = document.querySelector('.icon');

   if (toggleMenu.classList.contains('active')) {
      imgIcon.src = '/images/icon-close.svg';
   } else {
      imgIcon.src = '/images/icon-hamburger.svg';
   }

});