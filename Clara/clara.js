// Bildspel
let currentSlide = 0;
const images = ['path/to/first-image.jpg', 'path/to/second-image.jpg', 'path/to/third-image.jpg', 'path/to/fourth-image.jpg', 'path/to/fifth-image.jpg', 'path/to/sixth-image.jpg']
const slideImage = document.getElementById('slide-image');

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % images.length;
  slideImage.src = images[currentSlide];
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  slideImage.src = images[currentSlide];
});
let slideIndex = 1;
showSlides(slideIndex);

// Byta bild 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Aktuell bild
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Dölj alla bilder
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Visa bilden
  slides[slideIndex - 1].style.display = "block";  
}
