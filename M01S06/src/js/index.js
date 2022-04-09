import { fetchAPI, getAdress } from './buscar-cep.js';

const botaoBuscar = document.getElementById("btn-buscar");

botaoBuscar.addEventListener("click", function () {
  const cepInformado = document.getElementById('cep').value;
  const resultado = document.getElementById('resultado');
    let chave = 1

  if (cepInformado.length == 8 && chave == 1) {
    getAdress(cepInformado);
    chave = 0
  } else if (cepInformado.length > 0 && cepInformado.length < 8 && chave == 1) {
    alert('CEP Inválido!!!!!')
    chave = 0;
  } else
    alert('Para realizar a pesquisa, o CEP precisa ser informado!');
  chave = 0;

}); 