"use strict";

const $sliderMainImgList = document.querySelectorAll(".slider-fullscreen-img");
const $sliderMainTextList = document.querySelectorAll(".slider-fullscreen-text-item");
const $sliderMainDots = document.querySelector(".slider-fullscreen-dots"); 
const $sliderMainDotsList = document.querySelectorAll(".fullscreen-dots-item");

const $sliderHotelDots = Array.from(document.querySelectorAll(".hotel-slider-dots"));
const $sliderHotelImgsScreen = Array.from(document.querySelectorAll(".hotel-slider-box-wrapper"));
const $sliderHotelImgsBtn = Array.from(document.querySelectorAll(".hotel-slider-box-list"));
const $sliderHotelImgsPC = document.querySelectorAll(".hotel-slider-images");

const $sliderInterestDots = document.querySelector(".main-interest-dots");
const $sliderInterestDotItems = document.querySelectorAll(".main-interest-dots-item");
const $sliderInterestImgsList = document.querySelectorAll(".main-interest-box img");
const $sliderInterestImgsBtns = document.querySelectorAll(".main-interest-actions-btn");
const $sliderInterestImgsPC = document.querySelectorAll(".main-interest-img-btn");

const $tabBoxes = document.querySelectorAll(".hotel-main-slider-box");
const $tabBoxesBtns = document.querySelectorAll(".hotel-main-content-item");

//vars
let activeMainSlide = 0;
let mainSliderTimeout = null;

//tabs
$tabBoxesBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
        setActiveTab(e.currentTarget.dataset.name);
        for (let btn of $tabBoxesBtns) btn.classList.remove("active");
        e.currentTarget.classList.add("active");
    });
});

function setActiveTab(name) {
    for (let el of $tabBoxes) {
        if (el.dataset.name === name) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    }
}

//interest slider
$sliderInterestDots.addEventListener("click", (e) => {

    if (e.target.matches(".main-interest-dots-item")) {
        let index = e.target.dataset.value;
        changeInterestSliderSlide(index);
    }
    
});

$sliderInterestImgsPC.forEach(el => el.addEventListener("click", (e) => changeInterestSliderSlide(e.currentTarget.dataset.value)));
$sliderInterestImgsBtns.forEach(el => el.addEventListener("click", (e) => changeInterestSliderSlide(e.currentTarget.dataset.value)));

function changeInterestSliderSlide(index) {

    $sliderInterestDotItems.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    $sliderInterestImgsList.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    $sliderInterestImgsBtns.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

}

//hotel slider

//dots handlers
$sliderHotelDots.forEach(el => {
    el.addEventListener("click", (e) => {
        if (e.target.matches(".hotel-slider-dots-item")) {
            let index = e.target.dataset.value;
            let type = e.currentTarget.dataset.type;
            changeHotelSliderSlide(index, type);
        }
    });
});

//pc btns handler
$sliderHotelImgsPC.forEach(el => {
    el.addEventListener("click", (e) => {
        let target = e.target.closest(".hotel-slider-images-btn");
        if (target) {
            let index = target.dataset.value;
            let type = e.currentTarget.dataset.type;
            changeHotelSliderSlide(index, type);
        }
    });
});

//mobile btns handler
$sliderHotelImgsBtn.forEach(el => {
    el.addEventListener("click", (e) => {
        let target = e.target.closest(".hotel-slider-thumb");
        if (target) {
            let index = target.dataset.value;
            let type = e.currentTarget.dataset.type;
            changeHotelSliderSlide(index, type);
        }
    });
});

function changeHotelSliderSlide(index, type) {

    let sliderHotelDotItems = $sliderHotelDots.find(el => el.dataset.type === type).querySelectorAll(".hotel-slider-dots-item");
    let sliderScreens = $sliderHotelImgsScreen.find(el => el.dataset.type === type).querySelectorAll("img");
    let sliderHotelBtns = $sliderHotelImgsBtn.find(el => el.dataset.type === type).querySelectorAll(".hotel-slider-thumb");

    sliderHotelDotItems.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    sliderScreens.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    sliderHotelBtns.forEach((el) => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

}

//main slider
$sliderMainDots.addEventListener("click", changeMainSliderSlide);

mainSliderTimeout = setTimeout(changeMainSlideTimeout, 6000);

function changeMainSlideTimeout() {

    activeMainSlide++;
    if (activeMainSlide === 3) activeMainSlide = 0;
    setActiveMainSlide(String(activeMainSlide));
    mainSliderTimeout = setTimeout(changeMainSlideTimeout, 6000);

}

function changeMainSliderSlide(e) {

    if (e.target.matches(".fullscreen-dots-item")) {

        clearTimeout(mainSliderTimeout);
        mainSliderTimeout = setTimeout(changeMainSlideTimeout, 6000);
        let index = e.target.dataset.value;
        activeMainSlide = +index;
        setActiveMainSlide(index);

    }

}

function setActiveMainSlide(index) {
    $sliderMainImgList.forEach(el => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    $sliderMainTextList.forEach(el => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    $sliderMainDotsList.forEach(el => {
        if (el.dataset.value === index) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}