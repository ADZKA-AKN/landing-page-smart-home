const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', ()=> {
    mobileMenu.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

const hideMenu = () => {
    mobileMenu.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
};

closeMenu.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);