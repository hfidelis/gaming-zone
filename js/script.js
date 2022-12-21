const menuButton = document.querySelector('#menuToggle');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

// Monitorando o tamanho do body para impedir que o usuário fique preso com o menu aberto se a tela aumentar.
window.addEventListener('resize', function() {

    const bodyWidth = body.offsetWidth;
    if (bodyWidth >= 992) {
        nav.classList.remove('open')
        menuButton.className = 'bi bi-list'
        menuButton.style.color = 'rgba(255, 255, 255, 0.98)'
    }
    
})

// Botão de menu
menuButton.onclick = () => {
    
    nav.classList.toggle('open');

    if(nav.classList.contains('open') === true) {
        menuButton.className = 'bi bi-x-lg';
        menuButton.style.color = '#F63A25';
    } else {
        menuButton.className = 'bi bi-list';
        menuButton.style.color = 'rgba(255, 255, 255, 0.98)'
    }

}