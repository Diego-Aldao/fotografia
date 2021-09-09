window.onload = () => {
  //SWIPER
  if (document.body.id === "inicio") {
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
  }
};
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

//NAVEGACION MOVIL
const btnMenu = document.querySelector(".flotante-menu");
const btnCerrar = document.querySelector(".flotante-menu-movil");
const navMovil = document.querySelector(".menu-movil");
const dropMenu = document.querySelector(".drop-menu");
const linkTrabajos = document.querySelector(".link-trabajos");

const abrirMenu = () => {
  gsap.to(navMovil, {
    duration: 0.2,
    display: "block",
    opacity: 1,
  });
};
const cerrarMenu = () => {
  gsap.to(navMovil, {
    duration: 0.1,
    display: "none",
    opacity: 0,
  });
};

const abrirDrop = () => {
  if (dropMenu.style.height == "auto") {
    gsap.to(dropMenu, {
      height: "0px",
    });
  } else {
    gsap.to(dropMenu, {
      height: "auto",
    });
  }
};
btnMenu.addEventListener("click", abrirMenu);
btnCerrar.addEventListener("click", cerrarMenu);
linkTrabajos.addEventListener("click", abrirDrop);

//NAVEGACION DESKTOP
const linkTrabajosDesk = document.querySelector(".link-trabajos-desktop");
const menuDesk = document.querySelector(".menu-desk");
const listaNav = document.querySelector(".lista-desk");

linkTrabajosDesk.addEventListener("mouseover", () => {
  gsap.to(menuDesk, {
    height: "60px",
    duration: 0.3,
  });
  gsap.to(listaNav, {
    margin: "-35px 0px 0px",
    duration: 0.3,
  });
});
menuDesk.addEventListener("mouseleave", () => {
  gsap.to(menuDesk, {
    height: "35px",
    duration: 0.3,
  });
  gsap.to(listaNav, {
    margin: "0px 0px 0px",
    duration: 0.3,
  });
});

//BTN FLOTANTE UP
const btnFlotanteUp = document.querySelector(".flotante-up");
const scrollearBarraSuperior = () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    gsap.to(btnFlotanteUp, {
      display: "flex",
      opacity: 1,
    });
  } else {
    gsap.to(btnFlotanteUp, {
      display: "none",
      opacity: 0,
    });
  }
};

window.onscroll = () => {
  scrollearBarraSuperior();
};
