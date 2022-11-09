const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav-overlay');
const menuEl = document.querySelector('.nav-menu');

const toggleMenu = () => {
    menuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    document.body.classList.toggle('scroll-false');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);
window.addEventListener('resize', () => {
    if(this.innerWidth >= 1024) 
        if(menuEl.classList.contains('active')) toggleMenu();
})

// <script src="https://unpkg.com/scrollreveal@4"></script> {scroll reveal}
const sr = ScrollReveal({
    distance: '25px',
    duration: 1200, // 1.2s
    easing: 'cubic-bezier(.90, -.45, .245, 2.55)'    
});
sr.reveal('.showcase-text-group', {
    origin: 'top'
});
sr.reveal('.showcase-image-group', {
    origin: 'bottom'
});