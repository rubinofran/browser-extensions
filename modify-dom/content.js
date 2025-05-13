// TEST ON https://www.youtube.com/watch?v=mi7L2RV8_7Q&t=20s&ab_channel=KRILANSELOT

// Modifica el DOM de la página actual
function addSub() {
  extractedData = [];
  const videoTitle = document.querySelector("#title h1");
  console.log("DOM modified");
  alert("DOM modified");
  const subtitle = document.createElement("p");
  subtitle.className = "subtitle";
  subtitle.innerText = "Aguante esta banda!!";
  videoTitle.appendChild(subtitle);
}

// Ejecuta la modificación del DOM
addSub();
