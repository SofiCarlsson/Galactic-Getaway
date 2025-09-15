
/* För huvudbildens rörelse */

let imgElement = document.querySelector(".item1 img");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { 
        imgElement.classList.add("scale-up");
    } else {
        imgElement.classList.remove("scale-up");
    }
});



/* För bildspelet */

let bildIndex = 0; 

function visaBild(i) {
  let bilder = document.getElementsByClassName("bild"); 
  
  
  if (i >= bilder.length) {
    bildIndex = 0;
  }
  else if (i < 0) {
    bildIndex = bilder.length - 1;
  }
  

  for (let i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none"; 
  }
  
  bilder[bildIndex].style.display = "block"; 
}


function bytBild(i) {
  bildIndex += i; 
  visaBild(bildIndex); 
}

visaBild(bildIndex); 

