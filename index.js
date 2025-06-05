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

document.querySelector('.subtitulo-Cert').addEventListener('click', function() {
  
  const menu = document.querySelector('.certs');
  menu.classList.toggle('hide');
  if (menu.classList.contains('hide')) {
      menu.style.maxHeight = '0';
  } else {
      // menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.style.maxHeight = '450px';
  }
});

document.getElementById("downloadBtn").addEventListener("click", function() { 
  const link = document.createElement("a");
  link.href = "./documents/curriculo.pdf";
  link.download = "EmmanuelAcosta.pdf";
  link.click();
})

const servicesList = document.getElementById("servicesList");
const listSkils = [
  {
    nameSkils: 'HTML',
    desc: 'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) '
      + 'es el componente más básico de la Web. Define el significado y la estructura '
      + 'del contenido web. Además de HTML, generalmente se utilizan otras tecnologías '
      + 'para describir la apariencia/presentación de una página web (CSS) o la '
      + 'funcionalidad/comportamiento (JavaScript).'
  },
  {
    nameSkils: 'CSS',
    desc: 'CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets).'
      + 'Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es '
      + 'decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML '
      + 'que se encarga del contenido básico de las páginas.'
  },
  {
    nameSkils: 'Bootstrap',
    desc: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de '
      + 'código abierto para diseño de sitios y aplicaciones web.'
  },
  {
    nameSkils: 'JavaScript',
    desc: 'JavaScript es el lenguaje de programación que debes usar para añadir '
      + 'características interactivas a tu sitio web, (por ejemplo, juegos, '
      + 'eventos que ocurren cuando los botones son presionados o los datos '
      + 'son introducidos en los formularios, efectos de estilo dinámicos, '
      + 'animación, y mucho más).'
  },
  {
    nameSkils: 'React',
    desc: 'React es una libreria JavaScript de codigo abierto diceñada para crear '
      + 'interfaces de usuarios con el objetivo de facilitar el desarrollo de aplicaciones '
      + 'en una solo pagina. Es mantenido por Facebook y la comunidad de software libre.'
  },
    {
    nameSkils: 'TypeScript',
    desc: 'Es un lenguaje de programación libre y de código abierto desarrollado y mantenido '
      + 'por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos '
      + 'estáticos y objetos basados en clases.'
  },
  {
    nameSkils: 'Next.js',
    desc: 'Next.js es un marco web de desarrollo (también conocido como "metaframework") '
      + 'front-end de React de código abierto creado por Vercel que habilita '
      + 'funcionalidades como la representación del lado del servidor y la generación '
      + 'de sitios web estáticos para aplicaciones web basadas en React. '
  },
  {
    nameSkils: '.NET',
    desc: '.NET es un framework informático administrado, gratuito y de código abierto para '
      + 'los sistemas operativos Windows, Linux y macOS. Es un sucesor multiplataforma de '
      + '.NET Framework.'
  },
  {
    nameSkils: 'Node.js',
    desc: 'Es un entorno de ejecución de JavaScript de código abierto y '
      + 'multiplataforma que permite a los desarrolladores construir aplicaciones '
      + 'del lado del servidor y de red utilizando JavaScript.'
  },
  {
    nameSkils: 'Sql Server',
    desc: 'Microsoft SQL Server es un sistema de gestión de base de datos relacional, '
      + 'desarrollado por la empresa Microsoft. El lenguaje de desarrollo utilizado es '
      + 'Transact-SQL, una implementación del estándar ANSI del lenguaje SQL, utilizado '
      + 'para manipular y recuperar datos, crear tablas y definir relaciones entre ellas.'
  },
  {
    nameSkils: 'MySql',
    desc: 'Es un sistema de gestión de bases de datos relacional de código '
      + 'abierto, popular para almacenar y gestionar datos. Es una '
      + 'herramienta ampliamente utilizada en sitios web, aplicaciones '
      + 'y sistemas de gestión de contenido, ofreciendo flexibilidad y '
      + 'facilidad de uso para desarrolladores y administradores. '
  },
  {
    nameSkils: 'English B1',
    desc: 'English level B1 is the third level of English in the Common European Framework '
      + 'of Reference (CEFR), a definition of different language levels written by the '
      + 'Council of Europe. In everyday speech, this level would be called “intermediate”, '
      + 'and indeed, that is the official level descriptor in the CEFR.'
  },
];

let count = 1;
for (let i = 0; i < listSkils.length; i++) {
  const html = `
    <div class="service">
      <h3 class="n-service"><span class="number">${count}</span> ${listSkils[i].nameSkils}</h3>
      <p class="P-parrafo">${listSkils[i].desc}</p>
    </div>
  `;

  servicesList.innerHTML += html;
  count++;
}
