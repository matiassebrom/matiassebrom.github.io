// AGREGAR PADDING A LAS SECCIONES PARA QUE ENTRE LA NAV

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

const vHeight = document.querySelector("body").getBoundingClientRect().height;

document.querySelector("main").style.height = vHeight - headerHeight + "px";

const SectionsDivs = document.querySelectorAll("main > section");

//efecto maquina de escribir para descripcion

const description = document.querySelector(".home_description_p");
const descriptionText = description.innerHTML;
description.innerHTML = "";
let printStr = "";

const writeDescription = (text = descriptionText) => {
   
    let arrFromDescription = text.split("");
    let i = 0;
    description.innerHTML = "";
    clearInterval(printStr);

    printStr = setInterval(function () {
      description.innerHTML += arrFromDescription[i];
      i++;

      if (i === arrFromDescription.length) {
        clearInterval(printStr);
      }
    }, 50);
  
};


setTimeout(() => {
  writeDescription();
}, "1000");



// IR A LAS SECCIONES DESDE LA NAV
const navItem = document.querySelectorAll("#header > nav > ul > li");
const navLinks = document.querySelectorAll("#header > nav > ul > li > a");
const sections = document.querySelectorAll("section");
let activeSection = 0;



function changeSection(e, index) {
  clearInterval(printStr)
  e.preventDefault();

  SectionsDivs[activeSection].classList.remove("show-animation");
  SectionsDivs[activeSection].classList.add("hide-animation");
  
  

  setTimeout(() => {
    navItem[activeSection].classList.remove("active");
    SectionsDivs[activeSection].classList.add("hide");
    SectionsDivs[activeSection].classList.remove("hide-animation");
    SectionsDivs[activeSection].classList.remove("reverse");

    //change active section
    if (e.type == "click") {
      activeSection = index;
    }

    //case wheel
    else if (e.type == "mousewheel"){    
      activeSection += e.deltaY * 0.01;
      activeSection = Math.min(
        Math.max(0, activeSection),
        SectionsDivs.length - 1
      );
    }
    //case other bts
    else if (e.type == "keydown"){ 
      //bts +
      if (e.key == "ArrowUp" || e.key == "PageUp") {
        activeSection--;
        activeSection = Math.min(
          Math.max(0, activeSection),
          SectionsDivs.length - 1
        );
      }
      else if (e.key == "ArrowDown" || e.key == "PageDown" || e.keyCode == 32 ||e.code == "Space"){
        //bts -
        activeSection++;
        activeSection = Math.min(
          Math.max(0, activeSection),
          SectionsDivs.length - 1
        );
      }
    }

    SectionsDivs[activeSection].classList.remove("hide");
    SectionsDivs[activeSection].classList.add("show-animation");
    navItem[activeSection].classList.add("active");

    writeDescription();
  }, "2000");
} 




navLinks.forEach(function (navLink, index) {
  navLink.addEventListener("click", function (e) {
    changeSection(e, index)
  });
});

// DETECTAR TECLAS

/* document.onkeydown = function(e) {
  console.log(e.key+e.keyCode); // shows k75
}; */

// MOUSE WHELL FUNCTION

window.addEventListener(
  "mousewheel",
  function (e) {
    changeSection(e)
  },
  { passive: false }
);

// ARROW AND PAGE UP, DOWN, SPACE FUNCTION

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp" 
  || e.key == "PageUp" 
  || e.key == "ArrowDown" 
  || e.key == "PageDown" 
  || e.keyCode == 32 
  || e.code == "Space" ) {
    changeSection(e)
  }
});


