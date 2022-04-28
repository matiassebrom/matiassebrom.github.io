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

const navLinks = document.querySelectorAll("#header > nav > ul > li > a");
const sections = document.querySelectorAll("section");
let activeSection = 0;

navLinks.forEach(function (navLink, index) {
  navLink.addEventListener("click", function (e) {


    clearInterval(printStr)

    SectionsDivs[activeSection].classList.remove("show-animation");
    SectionsDivs[activeSection].classList.add("hide-animation");

  
    setTimeout(() => {
      SectionsDivs[activeSection].classList.add("hide");
      SectionsDivs[activeSection].classList.remove("hide-animation");
      SectionsDivs[activeSection].classList.remove("reverse");

      activeSection = index;

      SectionsDivs[activeSection].classList.remove("hide");
      SectionsDivs[activeSection].classList.add("show-animation");

      writeDescription();
    }, "2000");
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
    e.preventDefault();

    
    
    SectionsDivs[activeSection].classList.remove("show-animation");
    SectionsDivs[activeSection].classList.add("hide-animation");


    setTimeout(() => {
      SectionsDivs[activeSection].classList.add("hide");
      SectionsDivs[activeSection].classList.remove("hide-animation");


      activeSection += e.deltaY * 0.01;
      activeSection = Math.min(
        Math.max(0, activeSection),
        SectionsDivs.length - 1
      );

      SectionsDivs[activeSection].classList.remove("hide");
      SectionsDivs[activeSection].classList.add("show-animation");

      writeDescription();

    }, "2000");
  },
  { passive: false }
);

// ARROW AND PAGE UP, DOWN, SPACE FUNCTION

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp" || e.key == "PageUp") {
    e.preventDefault();

    

    SectionsDivs[activeSection].classList.remove("show-animation");
    SectionsDivs[activeSection].classList.add("hide-animation");

    setTimeout(() => {
      SectionsDivs[activeSection].classList.add("hide");
      SectionsDivs[activeSection].classList.remove("hide-animation");


      activeSection--;
      activeSection = Math.min(
        Math.max(0, activeSection),
        SectionsDivs.length - 1
      );

      SectionsDivs[activeSection].classList.remove("hide");
      SectionsDivs[activeSection].classList.add("show-animation");

      writeDescription();

    }, "2000");
  } else if (
    e.key == "ArrowDown" ||
    e.key == "PageDown" ||
    e.keyCode == 32 ||
    e.code == "Space"
  ) {
    e.preventDefault();

    

    SectionsDivs[activeSection].classList.remove("show-animation");
    SectionsDivs[activeSection].classList.add("hide-animation");


    setTimeout(() => {
      SectionsDivs[activeSection].classList.add("hide");
      SectionsDivs[activeSection].classList.remove("hide-animation");

      activeSection++;
      activeSection = Math.min(
        Math.max(0, activeSection),
        SectionsDivs.length - 1
      );

      SectionsDivs[activeSection].classList.remove("hide");
      SectionsDivs[activeSection].classList.add("show-animation");

      
    }, "2000");
  }
});
