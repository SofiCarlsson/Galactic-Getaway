document.addEventListener('DOMContentLoaded', function () {
    // Bildspel 
    const images = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;
    images[currentImageIndex].classList.add('active');

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateSlideshow(index) {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (index + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', function () {
        updateSlideshow(currentImageIndex - 1);
    });

    nextBtn.addEventListener('click', function () {
        updateSlideshow(currentImageIndex + 1);
    });

    // Animering för progress-bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        
        // Fördröjning 
        setTimeout(() => {
            bar.style.width = width;
        }, 500); 
    });
});