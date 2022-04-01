export class Produto {
    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

export class Pedidos extends Produto {


    adicionarProduto(item) {
        this.listaProdutos.push(item)
    }

    calcularTotal() {
        let totalPedido = 0;
        this.listaProdutos.forEach(item => {
            totalPedido += item.quantidade * item.preco;
        });
        return totalPedido;
    }
    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.nomeCliente = nomeCliente;
        super(this.nome, this.preco, this.emEstoque, this.quantidade)
    }
}

