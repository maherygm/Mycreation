const btn = document.querySelector('.countainer2');
btn.addEventListener('click',ToggleBurgers);
const nav = document.querySelector('.navigation');
const nav2 = document.querySelector('nav');
function ToggleBurgers() {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    nav2.classList.toggle('active');
    
}