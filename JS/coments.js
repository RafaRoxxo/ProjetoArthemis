let slideIndex = 1;
const prev = document.getElementById("prev")
prev.addEventListener("click", function () { plusSlides(-1); })
const next = document.getElementById("next")
next.addEventListener("click", function () { plusSlides(1); })

showSlides(slideIndex);
setInterval(function () { plusSlides(1); }, 5000)

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("depoimentos-container");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}