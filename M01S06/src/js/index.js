import { fetchAPI, getAdress } from './buscar-cep.js';

const searchBtn = document.getElementById("btn-buscar");

searchBtn.addEventListener("click", function () {
  const dataCEP = document.getElementById('cep').value;
      let key = 1

  if (dataCEP.length == 8 && key == 1) {
    getAdress();
    key = 0
  } else if (dataCEP.length > 0 && dataCEP.length < 8 && key == 1) {
    alert('CEP Inválido!!!!!')
    key = 0;
  } else
    alert('Para realizar a pesquisa, o CEP precisa ser informado!');
    key = 0;

}); 