//NAVEGACION MOVIL
const btnMenu = document.querySelector(".flotante-menu");
const btnCerrar = document.querySelector(".flotante-menu-movil");
const navMovil = document.querySelector(".menu-movil");

const abrirMenu = () => {
  navMovil.style.display = "block";
};
const cerrarMenu = () => {
  navMovil.style.display = "none";
};
btnMenu.addEventListener("click", abrirMenu);
btnCerrar.addEventListener("click", cerrarMenu);

//SWIPER
var swiper = new Swiper(".header-principal", {
  speed: 1500,
  parallax: true,
  loop: true,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".swiper", {
  centeredSlides: true,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//API INTESERCTION OBSERVER
const crearObservador = (animacion, nuevaClase) => {
  const secciones = document.querySelectorAll(animacion);

  const options = {
    root: null, //es el default, todo el viewport
    threshold: 0.26, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } //si no esta en la pantalla, termina la funcion
      entry.target.classList.add(nuevaClase);

      observer.unobserve(entry.target); //para que las animaciones solo se ejecuten la primera vez que se entra en la seccion.
    });
  }, options);
  secciones.forEach((section) => {
    observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
  });
};
crearObservador(".animacion-uno", "final-uno");
crearObservador(".animacion-dos", "final-dos");
crearObservador(".animacion-tres", "final-tres");
crearObservador(".animacion-cuatro", "final-cuatro");
