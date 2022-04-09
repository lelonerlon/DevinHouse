import { fetchAPI, getAdress } from './buscar-cep.js';

const searchBtn = document.getElementById("btn-buscar");

searchBtn.addEventListener("click", function () {

  validForm()

});


function validForm() {
  const dataState = document.getElementById('uf').value;
  const dataCity = document.getElementById('city').value;
  const dataStreet = document.getElementById('logradouro').value;
  let statusState = '';
  let keyState = 0;
  let statusCity = '';
  let keyCity = 0;
  let statusStreet = '';
  let keyStreet = 0;

  if (dataState.length == 0) {
    statusState = 'UF precisa ser informada';
    keyState = 1;
  } if (dataCity.length == 0) {
    statusCity = 'Cidade precisa ser informada';
    keyCity = 1;
  } if (dataStreet.length == 0) {
    statusStreet = 'Logradouro precisa ser informada';
    keyStreet = 1;
  } if (dataState.length == 1) {
    statusState = 'UF precisa ser informada com 2 digitos';
    keyState = 1;
  } if (dataState.length > 2) {
    statusState = 'UF precisa ser informada com 2 digitos';
    keyState = 1;
 } else {
    if (keyState == 1 || keyCity == 1 || keyStreet == 1) {
      alert(`
    ${statusState}
    ${statusCity}
    ${statusStreet}
    `)
    };

    if (keyState == 0 && keyCity == 0 && keyStreet == 0) {
      getAdress()
    }
  }

}