
//Bildspelet
let aktuellBildIndex = 0;
const bilder = document.getElementsByClassName("bilder"); 

// Byter bild 
const bytBild = (i) => {
    aktuellBildIndex += i; 

      if (aktuellBildIndex < 0) {
          aktuellBildIndex = bilder.length - 1; 
      } else if (aktuellBildIndex >= bilder.length) {
          aktuellBildIndex = 0; 
      }

  visaBild(aktuellBildIndex);
};

// Visar en specifik bild.
const visaBild = (i) => {
      Array.from(bilder).forEach(bild => bild.style.display = "none");

      bilder[i].style.display = "block";
};

visaBild(aktuellBildIndex);





//Animation på dataskärm.
const alienBild = document.getElementById('alienBild');

alienBild.addEventListener('mouseover', () => {
      alienBild.style.transform = 'scale(1.2)';
      alienBild.style.transition = 'transform 0.3s ease';
});
    
alienBild.addEventListener('mouseout', () => {
      alienBild.style.transform = 'scale(1)'; 
});


// För mobiler.
alienBild.addEventListener('touchstart', () => {
      alienBild.style.transform = 'scale(1.2)'; 
      alienBild.style.transition = 'transform 0.3s ease'; 
});

alienBild.addEventListener('touchend', () => {
      alienBild.style.transform = 'scale(1)'; 
});



