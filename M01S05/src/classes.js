class Produto{
    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

const produto1 = new Produto('Erlon', 'R$10,00', 'Não', 0);

console.log(produto1);