export const getAdress = async () => {
  const dataState = document.getElementById('uf').value;
  const dataCity = document.getElementById('city').value;
  const dataStreet = document.getElementById('logradouro').value;
  const data = await fetchApiAll(dataState, dataCity, dataStreet);
  
  
  if (data) {
    data.forEach((dado) => {
      const adressList = document.getElementById('endereco');
      const el = document.createElement('p')
      el.textContent = (`
      Logradouro: ${dado.logradouro}
      Bairro: ${dado.bairro}
      Complemento: ${dado.complemento}
      Cep: ${dado.cep}
      Ddd: ${dado.ddd}
      Ibge: ${dado.ibge}
      Cidade: ${dado.localidade} x
      UF: ${dado.uf}
      `);
      adressList.appendChild(el);
    });

  } if (data.length === 0) {
    adressList.innerHTML = ('Nenhum registro foi encontrado');
  }

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





