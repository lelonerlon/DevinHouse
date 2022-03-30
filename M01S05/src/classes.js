class Produto {
    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedidos {
    constructor(numeroPedido, listaProdutos, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.estaPago = false;
        this.listaProdutos = listaProdutos;
        this.nomeCliente = nomeCliente;

    }
    get listaProduto(){
        return this.listaProdutos
    }
}
const pedido1 = new Pedidos(12254,[''], 'Fulano de Tal')
console.log(pedido1);
