import { saudacao } from './saudacao.js';
import saudacaoEspecial from './saudacao-especial.js';
import { Produto, Pedidos } from './classes.js';
import { data, sleep } from './functions.js'

// Instanciando os Produtos:
const produto1 = new Produto('Arroz', 10, 10, 10);
const produto2 = new Produto('Feijão', 10, 5, 10);
const produto3 = new Produto('Macarrão', 5, 3, 10);
const produto4 = new Produto('Óleo', 15, 5, 40);
const produto5 = new Produto('Farinha de trigo', 5, 5, 20);

// Instanciando os Pedidos:

const pedido1 = new Pedidos(20220001, 'Paulo');
const pedido2 = new Pedidos(20220002, 'Pedro')

//Incluindo os produtos aos pedidos 1
const listaProduto = pedido1.adicionarProduto([produto1, produto2, produto3]);
const totalPedido = pedido1.calcularTotal(pedido1.listaProdutos);
console.log(listaProduto)
console.log(totalPedido);
console.log(`${pedido1.nomeCliente}, seu pedido foi gerado com o seguinte nº ${pedido1.numeroPedido} na data ${pedido1.dataPedido}, tem os seguintes itens: ${produto1.nome}, ${produto2.nome}, ${produto3.nome}`)

//Incluindo os produtos aos pedidos 2
pedido2.adicionarProduto([produto4, produto5]);
console.log(`${pedido2.nomeCliente}, seu pedido foi gerado com o seguinte nº ${pedido2.numeroPedido} na data ${pedido2.dataPedido}, tem os seguintes itens: ${produto4.nome}, ${produto5.nome}`)

//Definindo intervalo para executar a função data
setInterval(data, 2000);

sleep('Este é o código')
