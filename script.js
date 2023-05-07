/** iniciar variaveis */
let textoCodificar = document.querySelector('.codificar');
textoCodificar.focus();
let textoDecodificar = document.querySelector('.decodificar');
let resultadoCodif = document.querySelector('.criptografia-area');
let layoutAntig = document.getElementById('vertical-container');
let layoutNovo = document.getElementById('pagina-resultado');
const encerrarAviso = document.querySelector('.fechar-caixa');
const caixaAviso = document.querySelector('#caixa-aviso');
const overlay = document.querySelector('#overlay');

/** pop-up de erro */
function aviso() {
  caixaAviso.style.display = 'flex';
  overlay.style.opacity = 1;
  encerrarAviso.addEventListener('click', hide);
  function hide() {
    caixaAviso.style.display = 'none';
    overlay.style.opacity = 0;
  }
}

/** encriptografar palavra */
let encriptografar = document.querySelector('.enviar');

encriptografar.onclick = function iniciar() {
  textoCodificar = document.querySelector('.codificar');
  /** teste de acento e maiusculas */
  const regex = /[A-ZÀ-ÖØ-Þ-záàãâéèêíìîóòõôúùûÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛ]/;
  if (regex.test(textoCodificar.value)) {
    aviso();
  } else {

  /** criptografia */
    let transformar = textoCodificar.value;
    transformar = transformar.replace(/e/g, 'enter');
    transformar = transformar.replace(/i/g, 'imes');
    transformar = transformar.replace(/a/g, 'ai');
    transformar = transformar.replace(/o/g, 'ober');
    transformar = transformar.replace(/u/g, 'ufat');
    resultadoCodif.value = transformar;
    textoCodificar.value = '';
    textoDecodificar.value = '';
    textoDecodificar.focus();

    /** trocar layout da pagina */
    layoutAntig = document.getElementById('vertical-container');
    layoutAntig.style.display = 'none';
    layoutNovo = document.getElementById('pagina-resultado');
    layoutNovo.style.display = 'inline-block';
  }
};

/** descriptografar a palavra */
let descriptografar = document.querySelector('.retorno');
descriptografar.onclick = function () {
  textoDecodificar = document.querySelector('.decodificar');

  /** teste de acento e maiusculas */
  const regex = /[A-ZÀ-ÖØ-Þ-záàãâéèêíìîóòõôúùûÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛ]/;
  if (regex.test(textoDecodificar.value)) {
    aviso();
  } else {

  /** descriptografar */
    let decodificar = textoDecodificar.value;
    decodificar = decodificar.replace(/enter/g, 'e');
    decodificar = decodificar.replace(/imes/g, 'i');
    decodificar = decodificar.replace(/ai/g, 'a');
    decodificar = decodificar.replace(/ober/g, 'o');
    decodificar = decodificar.replace(/ufat/g, 'u');
    resultadoCodif.value = decodificar;
    textoDecodificar.value = '';
    textoCodificar.value = '';
    textoCodificar.focus();

    /** trocar layout da pagina */
    layoutAntig = document.getElementById('vertical-container');
    layoutAntig.style.display = 'none';
    layoutNovo = document.getElementById('pagina-resultado');
    layoutNovo.style.display = 'inline-block';
  }
};

/** função de copiar resultado */
let copiar = document.querySelector('.botao-copiar');
copiar.onclick = function () {
  let copiartexto = document.querySelector('.criptografia-area');
  copiartexto.select();
  navigator.clipboard.writeText(copiartexto.value);
  layoutAntig = document.getElementsByClassName('vertical-container');
};
