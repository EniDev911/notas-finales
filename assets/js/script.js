// Variables globales
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var total = 0;

// obtener promedio de notas
function obtenerPromedio() {
  total = (nota1 + nota2 + nota3);
  return (total / 3).toFixed(2)
}

// Pedir notas
function pedirNotas() {
  nota1 = +prompt("Ingresa la primera nota");
  nota2 = +prompt("Ingresa la segunda nota");
  nota3 = +prompt("Ingresa la tercera nota");
}

// seleccionar los botones en el documento
var botonHtml = document.getElementById("btn_html");
var botonCss = document.getElementById("btn_css");
var botonJs = document.getElementById("btn_js");

// Asociar las funciones a los botones
// Y mostrar el resultado en la tabla
botonHtml.onclick = function () {
  pedirNotas();
  document.getElementById("html-nota1").textContent = nota1;
  document.getElementById("html-nota2").textContent = nota2;
  document.getElementById("html-nota3").textContent = nota3;
  document.getElementById("html-promedio").textContent = obtenerPromedio();
}

botonCss.onclick = function () {
  pedirNotas();
  document.getElementById("css-nota1").textContent = nota1;
  document.getElementById("css-nota2").textContent = nota2;
  document.getElementById("css-nota3").textContent = nota3;
  document.getElementById("css-promedio").textContent = obtenerPromedio();
}

botonJs.onclick = function () {
  pedirNotas();
  document.getElementById("js-nota1").textContent = nota1;
  document.getElementById("js-nota2").textContent = nota2;
  document.getElementById("js-nota3").textContent = nota3;
  document.getElementById("js-promedio").textContent = obtenerPromedio();
}
