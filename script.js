'use strict';
//слайдер stages
const btnStageNext = document.querySelector('.btn-controls.next'),
      btnStagePrev = document.querySelector('.btn-controls.prev'),
      paginationItems = document.querySelectorAll('.pagination__item'),     
      slider = document.querySelector('.stages-slider__list');
let transformValues = 0,
    counter = 0,
    numsOfSlides =  paginationItems.length,
    widthSlide = 100,
    gapValue = 10;

btnStageNext.addEventListener('click',()=>{
    console.log(window.innerWidth)
    if(window.innerWidth >= 768){
        widthSlide = 50;
    }
        btnStagePrev.disabled = false;
        paginationItems[counter].classList.remove('pagination__item_active');
        counter += 1;
        paginationItems[counter].classList.add('pagination__item_active');
    transformValues -= widthSlide;
    slider.style.transform = `translateX(calc(${transformValues}% - ${gapValue * (counter + 1)}px))`
    if(counter === (numsOfSlides - 1)) {
        btnStageNext.disabled = true;
    }
})

btnStagePrev.addEventListener('click',()=>{
    console.log(window.innerWidth)
    if(window.innerWidth >= 768){
        widthSlide = 50;
    }
    btnStageNext.disabled = false;
    paginationItems[counter].classList.remove('pagination__item_active');
            counter -= 1;
    paginationItems[counter].classList.add('pagination__item_active');
    transformValues += widthSlide;
    slider.style.transform = `translateX(calc(${transformValues}% - ${gapValue * (counter + 1)}px))`
        if(counter === 0) {
        btnStagePrev.disabled = true;
    }
})

window.addEventListener('resize', function(event) {
    console.log(window.innerWidth);
    widthSlide = 100;
    transformValues = 0;
    slider.style.transform = `translateX(${transformValues}px)`;
    paginationItems[counter].classList.remove('pagination__item_active');
    counter = 0;
    paginationItems[counter].classList.add('pagination__item_active');
    btnStageNext.disabled = false;
    btnStagePrev.disabled = true;
}, true);