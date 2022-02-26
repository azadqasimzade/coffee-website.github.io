const searchIcon = document.getElementById('search');
const searchForm = document.getElementById('search-form');
const shop = document.getElementById('shop');
const cartItemContainer = document.querySelector('.cart-item-container');
const list = document.getElementById('list');
const navLinks = document.getElementById('nav-links');


searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    cartItemContainer.classList.remove('active');
    navLinks.classList.remove('active');
});

shop.addEventListener('click', () => {
    cartItemContainer.classList.toggle('active');
    searchForm.classList.remove('active');
    navLinks.classList.remove('active');
});

list.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItemContainer.classList.remove('active');
});

window.onscroll = () => {
    searchForm.classList.remove('active');
    cartItemContainer.classList.remove('active');
    navLinks.classList.remove('active');
}
