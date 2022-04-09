export const getAdress = async () => {
  const dataState = document.getElementById('uf').value;
  const dataCity = document.getElementById('city').value;
  const dataStreet = document.getElementById('logradouro').value;
  const data = await fetchApiAll(dataState, dataCity, dataStreet);
  console.log(data);
  // if (data) {
  //   const adressList = document.getElementById('resultado');
  //   adressList.textContent = `
  //   Logradouro: ${data.logradouro}
  //   Bairro: ${data.bairro}
  //   Complemento: ${data.complemento}
  //   Cep: ${data.cep}
  //   Ddd: ${data.ddd}
  //   Ibge: ${data.ibge}
  //   Cidade: ${data.localidade}
  //   UF: ${data.uf}
  //   `;
  //   }
};


  export async function fetchAPI(cep) {
    const base_url = 'https://viacep.com.br'
    const url = `${base_url}/ws/${cep}/json/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return await response.json();
    }
    return alert('No momento estamos sem comunicação com a API');

  }

  export async function fetchApiAll(state, city, street) {
    const base_url = 'https://viacep.com.br'
    const url = `${base_url}/ws/${state}/${city}/${street}/json/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return await response.json();
    }
    return alert('No momento estamos sem comunicação com a API');

  }









