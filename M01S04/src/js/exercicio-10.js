let contas = [
    { id: 1, saldo: 500, },
    { id: 2, saldo: 30000, },
    { id: 3, saldo: 50, }];


const operacao = (tipo, id, valor) => {
    let correntista = contas.find(contaId => contaId.id === id);
    let saldoCorrentista = correntista.saldo;
    let tipoOperacao = tipo;

    switch (tipoOperacao) {

        case '1':
            if (valor <= 0) {
                console.log(`Valor informado esta incorreto!`)
            } else if (valor > saldoCorrentista) {
                console.log(`Saldo indisponivel!`)
            } else {
                let valorSaque = saldoCorrentista - valor;
                console.log(`Saque realizado com sucesso! Seu saldo agora é de: ${valorSaque}`);
            }
            break;

        case '2':
            if (valor <= 0) {
                console.log(`Valor informado esta incorreto!`)
            } else {
                let valorDeposito = saldoCorrentista + valor;
                console.log(`Deposito realizado com sucesso! Seu saldo agora é de: ${valorDeposito}`);
            }
            break;

        default:
            console.log('Opção inválida!');
    }
};
//1 - Saque
// 2- Deposito

operacao("1", 1, 100)
