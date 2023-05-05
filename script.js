let teste = document.querySelector('.codificar');
teste.focus();
let texto = document.querySelector('.decodificar');
let final = document.querySelector('.resposta');

let encriptografar = document.querySelector('.go');
encriptografar.onclick = function first() {
  teste = document.querySelector('.codificar');
  let resultado = teste.value;
  resultado = resultado.replace(/e/g, 'enter');
  resultado = resultado.replace(/i/g, 'imes');
  resultado = resultado.replace(/a/g, 'ai');
  resultado = resultado.replace(/o/g, 'ober');
  resultado = resultado.replace(/u/g, 'ufat');
  final.value = resultado;
  teste.value = '';
  texto.value = '';
  teste.focus();
};

let descriptografar = document.querySelector('.back');
descriptografar.onclick = function () {
  texto = document.querySelector('.decodificar');
  let texto2 = texto.value;
  texto2 = texto2.replace(/enter/g, 'e');
  texto2 = texto2.replace(/imes/g, 'i');
  texto2 = texto2.replace(/ai/g, 'a');
  texto2 = texto2.replace(/ober/g, 'o');
  texto2 = texto2.replace(/ufat/g, 'u');
  final.value = texto2;
  texto.value = '';
  teste.value = '';
  teste.focus();
};

let copiar = document.querySelector('.button-copy');
copiar.onclick = function () {
  let copiartexto = document.querySelector('.resposta');
  copiartexto.select();
  navigator.clipboard.writeText(copiartexto.value);
};

function myFunction() {
  document.getElementById('myDIV').style.display = 'none';
}
