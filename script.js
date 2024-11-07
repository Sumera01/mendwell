const boxes = document.querySelectorAll('.box');
const factsContainer = document.querySelector('.facts-container');
const serviceBoxes = document.querySelectorAll('.box-content');
let lastScrollY = window.scrollY;

const changeBackgroundColor = (color) => {
    factsContainer.style.backgroundColor = color;
};

const handleScrollForFacts = () => {
    const { top, bottom } = factsContainer.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom > 0;

    if (window.scrollY > lastScrollY && isVisible) {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = 1;
                box.style.transform = 'translateY(0)';
            }, index * 300);
        });
        changeBackgroundColor('#e2b8b8');
    } else if (window.scrollY < lastScrollY && isVisible) {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(20px)';
            }, (boxes.length - index - 1) * 300);
        });
        changeBackgroundColor('#e2b8b8');
    }
};

const handleScrollForServiceBoxes = () => {
    serviceBoxes.forEach((box, index) => {
        const { top, bottom } = box.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom > 0;

        if (isVisible) {
            setTimeout(() => {
                box.style.opacity = 1;
                box.style.transform = 'translateY(0)';
            }, index * 200);
        } else {
            box.style.opacity = 0;
            box.style.transform = 'translateY(20px)';
        }
    });
};

const handleScroll = () => {
    handleScrollForFacts();
    handleScrollForServiceBoxes();
    lastScrollY = window.scrollY;
};

window.addEventListener('scroll', handleScroll);
