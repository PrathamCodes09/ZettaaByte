window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    header.style.backgroundPositionY = -scrollPosition / 2 + 'px';
});

const scrollingText = document.querySelector('.scrolling-text');

window.addEventListener('scroll', () => {
    const textPosition = scrollingText.getBoundingClientRect();

    if (textPosition.top <= window.innerHeight && textPosition.bottom >= 0) {
        scrollingText.classList.add('active');
    } else {
        scrollingText.classList.remove('active');
    }
});

const typedparagraph = document.querySelector('.typed-paragraph');

window.addEventListener('scroll', () => {
    const textPosition = typedparagraph.getBoundingClientRect();

    if (textPosition.top <= window.innerHeight && textPosition.bottom >= 0) {
        typedparagraph.classList.add('active');
    } else {
        typedparagraph.classList.remove('active');
    }
});