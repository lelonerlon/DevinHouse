export const getAdress = async () => {
  const dataCEP = document.getElementById('cep').value;
  const data = await fetchAPI(dataCEP);
  console.log(data);
  if (data) {
    const adressList = document.getElementById('resultado');
    adressList.textContent = `
    Logradouro: ${data.logradouro}
    Bairro: ${data.bairro}
    Complemento: ${data.complemento}
    Cep: ${data.cep}
    Ddd: ${data.ddd}
    Ibge: ${data.ibge}
    Cidade: ${data.localidade}
    UF: ${data.uf}
    `;
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









