export const contactModalActivator = () => {
    const contacForm = document.querySelector('.contact');
    const mainFeatureBtns = [...document.querySelectorAll('.main-features__btn')];
    const startUsingBtn = document.querySelector('#sliding-slogan-with-underline__start-using');
    const cancelBtn = document.querySelector('#contact-form-cancel-btn');
    const carouselBtnOne = document.querySelector('#sliding-carousel-banner__button-one');
    const carouselBtnThree = document.querySelector('#sliding-carousel-banner__button-three');
    const threeStepsSlogansRegisterBtn = document.querySelector('#three-steps-slogans-register-btn');
    const footerPhoneBtn = document.querySelector('#footer-down__btn-phone');
    const footerEmailBtn = document.querySelector('#footer-down__btn-email');

    const contactModalActivators = [...mainFeatureBtns, startUsingBtn, carouselBtnOne, carouselBtnThree, threeStepsSlogansRegisterBtn, footerEmailBtn, footerPhoneBtn];


    const activateContactModal = () => {
        contacForm.classList.toggle('contact--active');
    }

    contactModalActivators.forEach(btn => btn.addEventListener('click', activateContactModal));

    cancelBtn.addEventListener('click', () => contacForm.classList.remove('contact--active'));
}