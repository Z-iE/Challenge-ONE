let texto = document.querySelector('.decodificar');
texto.focus();
let teste = document.querySelector('.codificar');

let encriptografar = document.querySelector('.go');
encriptografar.onclick = function first() {
  texto = document.querySelector('.decodificar');
  let resultado = texto.value;
  resultado = resultado.replace(/e/g, 'enter');
  resultado = resultado.replace(/i/g, 'imes');
  resultado = resultado.replace(/a/g, 'ai');
  resultado = resultado.replace(/o/g, 'ober');
  resultado = resultado.replace(/u/g, 'ufat');
  texto.value = '';
  teste.focus();
  console.log(resultado);
};

let descriptografar = document.querySelector('.back');
descriptografar.onclick = function () {
  teste = document.querySelector('.codificar');
  let texto2 = teste.value;
  texto2 = texto2.replace(/enter/g, 'e');
  texto2 = texto2.replace(/imes/g, 'i');
  texto2 = texto2.replace(/ai/g, 'a');
  texto2 = texto2.replace(/ober/g, 'o');
  texto2 = texto2.replace(/ufat/g, 'u');
  teste.value = '';
  texto.focus();
  console.log(texto2);
};

let copiar = document.querySelector('.copiar');
copiar.onclick = function () {
  let copiartexto = document.querySelector('.codificar');
  copiartexto.select();
  navigator.clipboard.writeText(copiartexto.value);
};
