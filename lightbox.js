const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburguer1 = document.querySelector(".hamburger");
const aPagina = document.getElementById("aPagina");

const aEnlace = [
  "https://emmanuel0722.github.io/JsSearch/",
  "https://emmanuel0722.github.io/JsTasks/",
  "https://emmanuel0722.github.io/JsProduct/",
  "https://emmanuel0722.github.io/JsSitiosFav/",
  "https://emmanuel0722.github.io/JsPokedex/",
  "https://emmanuel0722.github.io/JsYesNop/",
  "https://emmanuel0722.github.io/RasctWeathermap/",
  "https://emmanuel0722.github.io/TodoListReact/",
  "https://emmanuel0722.github.io/PokeReactTs/",
  "https://persontestapi.somee.com/index.html",
  "https://usercontrol.somee.com/index.html",
  "https://emmanuel0722.github.io/PersonApp/",
  "https://emmanuel0722.github.io/ReactUserControl/",
  "https://emmanuel0722.github.io/VueUserControl/",
  "https://emmanuel0722.github.io/vanangulartest/browser/",
  "https://emmanuel0722.github.io/TestReact/",
  "https://github.com/Emmanuel0722/departmentapp",
  "https://github.com/Emmanuel0722/ApiTestCore"
];


imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"), imagen.getAttribute("alt"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImagen");
    hamburguer1.style.opacity = "1";
  }
});

const aparecerImagen = (imagen, link) => {
  imagenesLight.src = imagen;

  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImagen");
  hamburguer1.style.opacity = "0";

  for (let i = 0; i < aEnlace.length; i++) {
    if (aEnlace[i] == link) {
      aPagina.href = link;
    }
  }
};
