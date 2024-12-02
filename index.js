const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === "none" || curDisplayStyle === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const contenedorGaleria = dropdown.querySelector(".contenedor-galeria");

  toggleClass(contenedorGaleria, "hide");
}

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
  }
});

document.querySelector('.subtitulo').addEventListener('click', function() {
  const menu = document.querySelector('.contenedor-servicio');
  menu.classList.toggle('hide');
  if (menu.classList.contains('hide')) {
      menu.style.maxHeight = '0';
  } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
  }
});

document.querySelector('.subtitulo-Proyectos').addEventListener('click', function() {
  const menu = document.querySelector('.contenedor-galeria');
  menu.classList.toggle('hide');
  if (menu.classList.contains('hide')) {
      menu.style.maxHeight = '0';
  } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
  }
});

document.querySelector('.subtitulo-Expert').addEventListener('click', function() {
  
  const menu = document.querySelector('.experts');
  menu.classList.toggle('hide');
  if (menu.classList.contains('hide')) {
      menu.style.maxHeight = '0';
  } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
  }
});

document.getElementById("downloadBtn").addEventListener("click", function() { 
  const link = document.createElement("a");
  link.href = "./documents/curriculo.pdf";
  link.download = "EmmanuelAcosta.pdf";
  link.click();
})