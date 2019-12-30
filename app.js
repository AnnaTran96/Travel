var slides = document.querySelector('.slider-items').children;
var rightBtn = document.querySelector('.rightButton');
var leftBtn = document.querySelector('.leftButton');
var index = 0;

rightBtn.onclick=function() {
    // console.log("click");
    next("next");
}

leftBtn.onclick=function() {
    // console.log("click");
    next("left");
}

function next(direction) {
    if(direction == "next"){
        index++;
        if(index == slides.length){
            index = 0;
        }
    } else {
        if (index == 0){
            index = slides.length - 1;
        } else {
            index--;
        }
    }
    for (i=0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
