export const navHamburgerScripts = () => {
    const hamburger = document.querySelector('.nav__hamburger-wrapper');
    const hamburgerClicked = () => {
        const asideMenu = document.querySelector('.aside-menu');
        const header = document.querySelector('.sliding-slogan-with-underline');
        const hamburgerClose = document.querySelector('.hamburger-close-menu');
        const hamburgerBars = [...document.querySelectorAll('.nav__hamburger-div')];
        const welcomeSlogan = document.querySelector('.sliding-slogan-with-underline__btn-div');
        const slogan = document.querySelector('.sliding-slogan-with-underline__heading');
        const btns = [...document.querySelectorAll('.sliding-slogan-with-underline__btn')];


        asideMenu.classList.toggle('aside-menu--active');
        hamburgerClose.classList.toggle('hamburger-close-menu--active');
        hamburgerBars.forEach(bar => bar.classList.toggle('nav__hamburger-div--hide'));
        header.classList.toggle('sliding-slogan-with-underline-menu-active');
        welcomeSlogan.classList.toggle('sliding-slogan-with-underline__btn-div--menu-active');
        slogan.classList.toggle('sliding-slogan-with-underline__heading--menu-active');
        btns.forEach(btn => btn.classList.toggle('sliding-slogan-with-underline__btn--menu-active'));
    }
    hamburger.addEventListener('click', hamburgerClicked);
}
