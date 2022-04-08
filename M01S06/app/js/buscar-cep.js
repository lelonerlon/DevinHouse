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
  let chave = 1
  console.log(cepInformado.length)
  
  if (cepInformado.length == 8 && chave == 1){
    resultado.innerHTML = buscaCep(cepInformado);
    chave = 0
  } else if (cepInformado.length > 0 && cepInformado.length < 8 && chave == 1){
    alert('CEP Inválido!!!!!')
    chave = 0;
  } else 
    alert('Para realizar a pesquisa, o CEP precisa ser informado!');
    chave = 0;

}); 
