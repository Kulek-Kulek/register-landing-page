export const slidinSlogansScript = () => {
    let nextSloganIndex = 0;
    const slogans = [...document.querySelectorAll('.sliding-slogan-with-underline__sliding-span')];

    const activeSloganIndex = slogans.findIndex(slogan => slogan.classList.contains('sliding-slogan-with-underline__sliding-span--active'));

    slogans[activeSloganIndex].classList.remove('sliding-slogan-with-underline__sliding-span--active');

    nextSloganIndex = activeSloganIndex + 1;
    if (nextSloganIndex === slogans.length) {
        nextSloganIndex = 0
    }

    if (nextSloganIndex % 2 === 0) {
        slogans[nextSloganIndex].classList.add('sliding-slogan-with-underline__sliding-span-left');
        slogans[nextSloganIndex].classList.add('sliding-slogan-with-underline__sliding-span--active');
    } else {
        slogans[nextSloganIndex].classList.add('sliding-slogan-with-underline__sliding-span--active');
    }
}