
// toggle button for navigation bar
let toggle = document.getElementById("toggle");
let menu = document.getElementById("nav-options");

toggle.addEventListener("click", () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


//image slider
let slideIndex = 0; 
const slideWidth = document.querySelector('.member').offsetWidth;

//direction is given when btn is clicked
function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const maxSlides = slider.children.length;

    slideIndex += direction;

    //slides card one by one 
    //after last card, first card is shown
    if (slideIndex < 0) {
        slideIndex = maxSlides - 1;
    } else if (slideIndex >= maxSlides) {
        slideIndex = 0;
    }

    const offset = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}