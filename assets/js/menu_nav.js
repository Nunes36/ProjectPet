const menuNav = document.querySelector(".container_hamburguer");

const toggleMenu = (evt) => {
    if(evt.type === 'touchstart') evt.preventDefault();
    const menu = document.querySelector('.navegacao');
    menu.classList.toggle('active');
}

menuNav.addEventListener('click', toggleMenu);
menuNav.addEventListener('touchstart', toggleMenu);