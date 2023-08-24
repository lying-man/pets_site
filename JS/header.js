"use strict";

const $overlay = document.querySelector(".overlay");
const $btnCall = document.querySelector(".header-top-call");
const $btnMenuOpen = document.querySelector(".burger");
const $btnCloseMenu = document.querySelector(".close-menu");
const $menu = document.querySelector(".header-menu-mobile");
const $modal = document.querySelector(".modal");
const $btnCloseModal = document.querySelector(".close-modal");
const $btnOpenModal = document.querySelector(".header-top-call");
const $menuLinks = document.querySelectorAll(".header-menu-mobile a");

const scrollPanelWidth = window.innerWidth - document.documentElement.offsetWidth;

function setScroll(status) {
    if (!status) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = scrollPanelWidth + "px";
    } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }
}

//overlay
function toggleOverlay(status) {
    if (status) {
        $overlay.classList.add("active");
    } else {
        $overlay.classList.remove("active");
    }
}

//menu
$btnMenuOpen.addEventListener("click", () => setMenuVisibility(true));
$btnCloseMenu.addEventListener("click", () => setMenuVisibility(false));
$menuLinks.forEach((el) => el.addEventListener("click", () => setMenuVisibility(false)));

function setMenuVisibility(status) {
    if (status) {
        toggleOverlay(true);
        setScroll(false);
        $menu.classList.add("active");
    } else {
        $menu.classList.remove("active");
        toggleOverlay(false);
        setScroll(true);
    }
}

//call modal
$btnOpenModal.addEventListener("click", () => setModalVisibility(true));
$btnCloseModal.addEventListener("click", () => setModalVisibility(false));

function setModalVisibility(status) {
    if (status) {
        toggleOverlay(true);
        setScroll(false);
        $modal.classList.add("active");
    } else {
        $modal.classList.remove("active")
        toggleOverlay(false);
        setTimeout(() => setScroll(true), 300);
    }
}

