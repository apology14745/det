// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: " *Sube tu volumen beibi", time: 5},
  { text: " *Lo da todo *", time: 15},
  { text: "Agradecimientos para ChatGPT4 y ElpisaNucas/GitHub", time: 20},
  { text: "Todo tiene el color", time: 41 },
  { text: "de tus ojos, cómo ves", time: 49 },
  { text: "todo cambia, no así tu voz", time: 55 },
  { text: "cuando me hablas en frances limón", time: 63},
  { text: "En un barco de papel yo volvere", time: 70 },
  { text: "por ti mi amor frances limón", time: 80},
  { text: "Las luces de la ciudad se apagaran", time: 85 },
  { text: "te besaré, me besarás.", time: 92 },
  { text: "Me encanta tu actitud,", time: 102 },
  { text: "dios conserve tu salud", time: 108 },
  { text: "sólo por mirarte comprendí", time: 116 },
  { text: "para que yo vine aqui ... ", time: 123 },
  { text: "xd espero te guste bb ", time: 132 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);