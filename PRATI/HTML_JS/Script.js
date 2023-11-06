const btn = document.querySelector('.countainer');
btn.addEventListener('click',changecolor);
function changecolor() {
    btn.classList.toggle('active');
}