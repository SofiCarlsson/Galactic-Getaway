let slideIndex = 1;
const pics = document.getElementsByClassName("slides");
showSlide(slideIndex);
showItems();
window.addEventListener('scroll', showItems);


function changeSlide(i) {
    removeSlide(slideIndex);

    if (slideIndex === pics.length && i === 1) {
        slideIndex = 1;
    }

    else if (slideIndex === 1 && i === -1) {
        slideIndex = pics.length;
    }

    else {
        slideIndex = slideIndex + i;
    }

    showSlide(slideIndex);
}

function removeSlide(i) {
    pics[i - 1].classList.remove('showSlide');
}

function showSlide(i) {
    pics[i - 1].classList.add('showSlide');
}

function showItems() {
    const items = document.querySelectorAll('.flexItem');
    const visibleWindow = window.innerHeight;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < visibleWindow - 100) {
            item.classList.add('visible');
        }
    });
}