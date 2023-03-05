const navSlide = () => {
    constburger = document.querySelector('.burger');
    constnav = document.querySelector('.nav-link');
    constnavLinks = document.querySelectorAll('nav-links li');
} 
  

burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Burger Animation
    burger.classList.toggle('toggle');

    //Animation Links
    navLinks.forEach((link,_index) => {
       if (link.style.animation) {
        link.style.animation = '';
       } else {
        link.style.animation =`navLinksFade 0.5s ease forwards $ {
        });
    