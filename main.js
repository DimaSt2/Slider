const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
        activeSlide(index);
        activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach ((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

const switchSlide = () => {
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
    
    for(let slide of slides) {
      slide.classList.remove('active');
    }
    
    slides[index].classList.add('active');
    if (index == slides.length - 1) {
        index = 0;
    } else {
    index++;}
};

setInterval (switchSlide, 2000);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);