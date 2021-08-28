const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".open-btn .fa-times");
const slider = document.querySelector(".slider-container");
console.log(slider);

openBtn.addEventListener("click", function() {
    console.log(">>");
    slider.classList.add('active')
});
closeBtn.addEventListener("click", function() {
    console.log(">>");
    slider.classList.remove('active')
});