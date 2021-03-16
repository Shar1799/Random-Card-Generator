/* eslint-disable */
import "./style.css";

let guardar; //variable para almacenar símbolo generado

window.onload = () => {
  document.querySelector(".parteSuperior").innerHTML = simboloAleatorio();
  document.querySelector(".parteInferior").innerHTML = almacenarSimbolo();
  document.querySelector(".numero").innerHTML = numeroAleatorio();
};

var simboloAleatorio = () => {
  var simbolo = ["♦", "♥", "♠", "♣"]; //Arreglo con símbolos
  var generadorSimbolo = [Math.floor(Math.random() * simbolo.length)]; //generador de aleatorio
  guardar = simbolo[generadorSimbolo];

  //Retorna
  return simbolo[generadorSimbolo];
};

var almacenarSimbolo = () => {
  return guardar;
};

var numeroAleatorio = () => {
  var numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]; //Arreglo con números
  var generadorNumero = [Math.floor(Math.random() * numero.length)]; //generador de aleatorio

  //Retorna
  return numero[generadorNumero];
};
