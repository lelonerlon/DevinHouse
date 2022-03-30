class Produto {
    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedidos {
    adicionarProduto(item) {
        this.listaProdutos.push(item)
    }
    constructor(numeroPedido, nomeCliente) {
        let arr = [];
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = arr;
        this.nomeCliente = nomeCliente;
    }
}

let numeroPedido = 12254;
let nome = 'Fulano de Tal';


const pedido1 = new Pedidos(numeroPedido, nome);
console.log(pedido1);


