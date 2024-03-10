const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");
const jsContainer = document.getElementById("jsContainer");
const javaScript = document.getElementById("javaScript");
// const contenedor = document.getElementById("contenedor");

//obtiene elementos
// const contenedor = document.querySelector('.dropdown .title');

//vincula listeners a estos elementos

// const contenedorParent = javaScript.parentElement;

javaScript.addEventListener("click", toggleMenuDisplay);

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

// console.log(menu);
// console.log(hamburguer);

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

// function toggleClass(elemet, className) {}

// javaScript.addEventListener("click", () => {
//   // CAMBIAR LA CLASE DEL CONTENEDOR...
//   jsContainer.classList.toggle("hide");
//   if (jsContainer.className == "contenedor-galeria hide") {
//     setTimeout(() => {
//       jsContainer.parentElement.classList.toggle("hideSecond");
//       jsContainer.classList.remove("hide");
//     }, 1500);
//   } else {
//     setTimeout(() => {
//       jsContainer.parentElement.classList.toggle("contenedor-galeria");
//       jsContainer.classList.remove("hide");
//       console.log("Abajo");
//     }, 500);
//   }
// });
