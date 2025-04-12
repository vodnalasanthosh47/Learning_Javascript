const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length === 0) return; // No slides to show
    
    slides[slideIndex].classList.add("diplaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => {
        slide.classList.remove("diplaySlide");
    });
    slides[slideIndex].classList.add("diplaySlide");
}

function nextSlide() {
    // console.log("nextSlide: " + slideIndex);
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
