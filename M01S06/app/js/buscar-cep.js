
  async  function pegarDadosProcessados(cep) {
    const cep = document.getElementById('cep').ariaValueMax;
    
        return baixarDados(`https://viacep.com.br/ws/${cep}/json/`)
          .catch(e => {
            return baixarDadosReservas(url) // retorna uma Promise
          })
          .then(v => {
            return processarDadosNoWorker(v); // retorna uma Promise
          });
      }

      pegarDadosProcessados(cep)
