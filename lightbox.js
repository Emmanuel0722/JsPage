const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector(".hamburger");
const aPagina = document.getElementById('aPagina');

// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);    "./imagenes/fakeGoogle.PNG":

const aEnlace = [
  "https://emmanuel0722.github.io/JsSearch/",
  "https://emmanuel0722.github.io/JsTasks/",
  "https://emmanuel0722.github.io/JsProduct/",
  "https://emmanuel0722.github.io/JsSitiosFav/",
  "https://emmanuel0722.github.io/JsPokedex/",
  "https://emmanuel0722.github.io/JsYesNop/"
]

// console.log(aEnlace["./imagenes/fakeGoogle.PNG"])
// aEnlace.forEach(enlace => {
//   console.log(enlace);
// })

// const aEnlace = [
//   "https://emmanuel0722.github.io/fakeGoogle/",
//   "https://emmanuel0722.github.io/JsTasks/",
//   "Nada por Aquí.",
//   "Nada por acá.",
//   "Nara por acuyá.",
//   "Nada de Nada."
// ]
// console.log(aEnlace);
// console.log(aEnlace1);

imagenes.forEach(imagen => {
  imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'), imagen.getAttribute('alt'));
  })
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
      contenedorLight.classList.toggle('show');
      imagenesLight.classList.toggle('showImagen');
      hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen, link) => {
  imagenesLight.src = imagen;

  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImagen');
  hamburguer1.style.opacity = '0';

  for (let i = 0; i < aEnlace.length; i++) {
    if (aEnlace[i] == link) {
      aPagina.href = link
    }
  }
}