//efecto maquina de escribir

/* const description = document.querySelector(".home_description_p");
const descriptionText = description.innerHTML;


let writing = text => {
    let arrFromStr = text.split("");
    let i = 0
    description.innerHTML = ""
    let printStr = setInterval(function(){
        description.innerHTML += arrFromStr[i]
        i++;

        if (i === arrFromStr.length){
            clearInterval(printStr)
        }
    },100)
}

writing(descriptionText)
 */

//app bk

// AGREGAR PADDING A LAS SECCIONES PARA QUE ENTRE LA NAV

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

  const vHeight = document
  .querySelector("body")
  .getBoundingClientRect().height;
  console.log(vHeight);

  const main = document
  .querySelector("main");

  main.style.height = vHeight - headerHeight + "px";
  


  const SectionsDivs = document.querySelectorAll("main > section");

/* SectionsDivs.forEach((element) => {
  element.style.paddingTop = navHeight * 1.3 + "px";
}); */

//efecto maquina de escribir

const description = document.querySelector(".home_description_p");
const descriptionText = description.innerHTML;


let writing = text => {
    


    setTimeout(() => {
        let arrFromStr = text.split("");
        let i = 0
        description.innerHTML = ""
        let printStr = setInterval(function(){
            description.innerHTML += arrFromStr[i]
            i++;

            if (i === arrFromStr.length){
                clearInterval(printStr)
            }
        },50)
      }, "1000");

    
}

writing(descriptionText)

// IR A LAS SECCIONES DESDE LA NAV

const navLinks = document.querySelectorAll("#header > nav > ul > li > a");
const sections = document.querySelectorAll("section");
let activeSection = 0;
/* const margin = document.getElementById("home").offsetTop;
let position = "0";
let positions = [];
let actualPositionIndex = 0;
let actualPosition = [positions[actualPositionIndex]]; */

/* navLinks.forEach(function (navLink, index) {
  //guardo las position en un array
  const id = navLink.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  position = element.offsetTop - margin + 1;
  positions.push(position);

  



  navLink.addEventListener("click", function (e) {
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const margin = document.getElementById("home").offsetTop;
    position = element.offsetTop - margin + 1;
    e.preventDefault();
    actualPositionIndex = index;
    actualPosition = positions[index];
    goto();
    ponerClase()
  });
});
 */

navLinks.forEach(function (navLink, index) {
  navLink.addEventListener("click", function (e) {
    SectionsDivs[activeSection].classList.remove("show-animation");
    SectionsDivs[activeSection].classList.add("hide-animation");

    setTimeout(() => {
      SectionsDivs[activeSection].classList.add("hide");
      SectionsDivs[activeSection].classList.remove("hide-animation");

      activeSection = index;

      SectionsDivs[activeSection].classList.remove("hide");
      SectionsDivs[activeSection].classList.add("show-animation");
      writing
    }, "1000");
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
    }, "1000");
  },
  { passive: false }
);

// ARROW AND PAGE UP, DOWN, SPACE FUNCTION

/* document.addEventListener("keydown", function(e) {
  
  if (e.key == "ArrowUp" || e.key == "PageUp"){
    e.preventDefault();
    actualPositionIndex --
    actualPositionIndex = Math.min(Math.max(0, actualPositionIndex), positions.length);
    actualPosition = positions[actualPositionIndex];
    goto();
  
  } else if (e.key == "ArrowDown" || e.key == "PageDown" || e.keyCode == 32 || e.code == "Space" ){
    e.preventDefault();
    actualPositionIndex ++
    actualPositionIndex = Math.min(Math.max(0, actualPositionIndex), positions.length);
    actualPosition = positions[actualPositionIndex];
    goto();
  }
}); */

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
    }, "1000");
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
    }, "1000");
  }
});
