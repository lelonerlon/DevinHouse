async function buscaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const formattedResponse = await response.json();


  // .then((resposta) => resposta.json())
  // console.log(resultado);
  return console.log(formattedResponse)
}

const botaoBuscar = document.getElementById("btn-buscar");
botaoBuscar.addEventListener("click", function () {
  const cepInformado = document.getElementById('cep').value;
  const resultado = document.getElementById('resultado');
  // resultado.innerHTML = buscaCep(cepInformado);
}); 
