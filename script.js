const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

const hideMenu = () => {
    mobileMenu.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
};

closeMenu.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);

function toggleFAQ(element) {
    const allitems = document.querySelectorAll('.faq-items');
    const content = element.querySelectorAll('.faq-content')
    const img = element.querySelector('img');
    const openIcon = 'assets/+.svg';
    const closeIcon = 'assets/-.svg';
    const isopen = !content.style.maxHeight;

    allitems.forEach(item => {
        const itemContent = item.querySelector('.faq-content');
        const itemImg = item.querySelector('img');
        itemContent.style.maxHeight = null;
        itemImg.src = openIcon;
    });

    if (isopen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        img.src = closeIcon;
    }
}