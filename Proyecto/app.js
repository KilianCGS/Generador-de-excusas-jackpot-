// =======================================
// 🧙 Datos base: rutas de imágenes desde index.html
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
  const indice = Math.floor(Math.random() * arreglo.length);
  return arreglo[indice];
};

// =======================================
// 🎰 Girar una parte concreta
// =======================================
const girarParte = parte => {
  const texto = document.getElementById(parte);
  const imagen = document.getElementById(`img-${parte}`);
  const contenedor = texto.parentElement;

  contenedor.classList.add("girando");

  setTimeout(() => {
    const seleccion = obtenerAleatorio(partesPersonaje[parte]);
    imagen.src = seleccion.img;
    imagen.alt = seleccion.nombre;
    texto.textContent = seleccion.nombre;
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
  const descripciones = partes.map(p => document.getElementById(p).textContent);

  if (descripciones.every(d => d && d !== "---")) {
    document.getElementById("descripcionFinal").textContent =
      `Tu héroe lleva un ${descripciones[0]}, viste una ${descripciones[1]} y empuña un ${descripciones[2]}.`;
  }
};
