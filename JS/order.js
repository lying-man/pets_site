"use strict";

const $selects = document.querySelectorAll(".select");
const $btnNextStep = document.querySelector(".next-step-form");

const $singleSelect = document.querySelector(".select-single");
const $singleSelectTitle = $singleSelect.querySelector(".select-title");
const $singleSelectInputs = document.querySelectorAll(".select-single-input");

const $selectEat = document.querySelector(".select-multiple-one");
const $selectEatInputs = document.querySelectorAll(".select-multiple-input-one");
const $selectEatTitle = $selectEat.querySelector(".select-title");

const $stepFormOne = document.querySelector(".step-form-one");
const $stepFormTwo = document.querySelector(".step-form-two");
const $stepOneIcon = document.querySelector(".step-one");
const $stepTwoIcon = document.querySelector(".step-two");

const $containerTop = document.querySelector(".container-top");
const $main = document.querySelector(".main");

//eat select
$selectEatInputs.forEach((el) => el.addEventListener("change", chooseSelectEat));

function chooseSelectEat(e) {
    let value = e.target.value;
    $selectEatTitle.textContent = value;
    $selectEat.classList.remove("active");
}

//toggle select functionallity
$selects.forEach(el => el.addEventListener("click", (e) => {
    let selectItem = e.currentTarget;
    selectItem.classList.toggle("active");
}));

//single select
$singleSelectInputs.forEach((el) => {
    el.addEventListener("change", (e) => {
        $singleSelectTitle.textContent = e.target.value;
        $singleSelect.classList.remove("active");
    });
});

//next step form
$btnNextStep.addEventListener("click", () => {
    $stepFormOne.classList.add("hide");
    $stepFormTwo.classList.remove("hide");
    $stepOneIcon.classList.remove("active");
    $stepTwoIcon.classList.add("active");
    $containerTop.classList.add("next");
    $main.classList.add("next");
});

//date
let dateOne = null;
let dateTwo = null;

dateOne = new AirDatepicker('#date-one', {
    position: "bottom center",
    onSelect: () => {
        dateOne.hide();
    },
});

dateTwo = new AirDatepicker('#date-two', {
    position: "bottom center",
    onSelect: () => {
        dateTwo.hide();
    },
});

