using GerarEstoque.Screens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeraEstoque;
public class Produto
{
    public static void Cadastrar()
    {
        Console.Clear();
        Console.WriteLine("            Cadastro            ");
        Console.WriteLine("===================================");
        Console.SetCursorPosition(2, 3);
        Console.WriteLine("Nome do produto: ");
        var nome = Console.ReadLine();
        Console.SetCursorPosition(2, 4);
        Console.WriteLine("Quantidade: ");
        var quantidade = Console.ReadLine();
        Console.SetCursorPosition(2, 5);
        Console.WriteLine("Valor de compra: ");
        var valorCompra = Console.ReadLine();
        Console.SetCursorPosition(2, 6);
        Console.WriteLine("Valor de Venda: ");
        var valorVenda = Console.ReadLine();
        Random numAleatorio = new Random();
        var id = numAleatorio.Next();
        Console.WriteLine(nome);

        Sucesso(id, nome, quantidade, valorCompra, valorVenda);

    }

    private static void Sucesso(int? id, string? nome, string? quantidade, string? valorCompra, string? valorVenda)
    {
        Console.Clear();
        Console.WriteLine("Produto Cadastrado com sucesso!");
        Console.WriteLine("ID: " + id);
        Console.WriteLine("Nome: " + nome);
        Console.WriteLine("Qtd: " + quantidade);
        Console.WriteLine("R$ Compra: " + valorCompra);
        Console.WriteLine("R$ Venda: " + valorVenda);

        Console.WriteLine("Pressione, qualquer tecla para retonar ao menu");
        Console.ReadLine();
        MenuScreen.Iniciar();
    }

}
