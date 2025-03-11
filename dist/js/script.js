const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__nav > ul");

if (burger && headerA) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        headerA.classList.toggle("open");
    });
}