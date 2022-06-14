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

    }
}
