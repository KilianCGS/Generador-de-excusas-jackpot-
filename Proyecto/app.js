// =======================================
// 🧙 Datos base: rutas de imágenes
// =======================================
const partesPersonaje = {
  cabeza: [
    { nombre: "sombrero de mago", img: "img/cabezas/sombrero_mago.png" },
    { nombre: "casco de guerrero", img: "img/cabezas/casco_guerrero.png" },
    { nombre: "capucha de ninja", img: "img/cabezas/capucha_ninja.png" },
    { nombre: "cinta de explorador", img: "img/cabezas/cinta_explorador.png" }
  ],
  torso: [
    { nombre: "túnica de mago", img: "img/torso/tunica_mago.png" },
    { nombre: "armadura de guerrero", img: "img/torso/armadura_guerrero.png" },
    { nombre: "camisa de ninja", img: "img/torso/camisa_ninja.png" },
    { nombre: "chaqueta de explorador", img: "img/torso/chaqueta_explorador.png" }
  ],
  arma: [
    { nombre: "bastón mágico", img: "img/armas/baston_magico.png" },
    { nombre: "espada de guerrero", img: "img/armas/espada_guerrero.png" },
    { nombre: "katana de ninja", img: "img/armas/katana_ninja.png" },
    { nombre: "arco de cazador", img: "img/armas/arco_cazador.png" }
  ]
};

// =======================================
// 🎲 Función para obtener elemento aleatorio
// =======================================
const obtenerAleatorio = arreglo => {
  const indice = Math.round((arreglo.length - 1) * Math.random());
  return arreglo.at(indice);
};

// =======================================
// 🎰 Girar una parte concreta
// =======================================
const girarParte = parte => {
  const elemento = document.getElementById(parte);
  const contenedor = elemento.parentElement;
  contenedor.classList.add("girando");

  setTimeout(() => {
    const seleccion = obtenerAleatorio(partesPersonaje[parte]);
    elemento.src = seleccion.img;
    elemento.alt = seleccion.nombre;
    contenedor.classList.remove("girando");
    mostrarDescripcion();
  }, 400);
};

// =======================================
// 🌀 Girar todas las partes
// =======================================
const girarTodo = () => {
  Object.keys(partesPersonaje).forEach(parte => girarParte(parte));
};

// =======================================
// 📜 Mostrar descripción final
// =======================================
const mostrarDescripcion = () => {
  const partes = ["cabeza", "torso", "arma"];
  const descripciones = partes.map(p => {
    const src = document.getElementById(p).getAttribute("src");
    return src.includes("placeholder") ? null : partesPersonaje[p].find(x => x.img === src)?.nombre;
  });

  if (descripciones.every(Boolean)) {
    document.getElementById("descripcionFinal").textContent =
      `Tu héroe lleva un ${descripciones[0]}, viste una ${descripciones[1]} y empuña un ${descripciones[2]}.`;
  }
};
