
/* 
 Si queremos que algo aparezca con una transición tenemos que:
 Agregare la clase show-on-scroll
 Agregarle alguna transición que querramos (derecha, izquierda, abajo, arriba, opacidad, etc)
 Estas clases deberíamos agregarlas y borrarlas donde dice "not-visible"

Ejemplo de clase que se traslada desde la derecha

.not-visible {
  transform: translate3d(100px, 0, 0);
}

el elemento debería quedar con las clases transition-duration-05 show-on-scroll

importar este js al index

*/

var elementsToShow;

var scroll = window.requestAnimationFrame ||
  function (callback) { window.setTimeout(callback, 1000 / 60) };

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.remove('transition-right-active');
      element.classList.remove('transition-left-active');
    } else {
      if (element.classList.contains("transition-right")) {
        element.classList.add('transition-right-active');
      }
      if (element.classList.contains("transition-left")) {
        element.classList.add('transition-left-active');
      }
    }
  });

  scroll(loop);
}

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

document.addEventListener("DOMContentLoaded", () => {
  elementsToShow = document.querySelectorAll('.show-on-scroll');
  loop();

});