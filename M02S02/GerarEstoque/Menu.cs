using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeraEstoque;

internal class Menu
{
    public static void Show()
    {
        Console.Clear();
        DrawCanvas();
        ShowOption();
        var option = short.Parse(Console.ReadLine());
        switch (option)
        {
            case 1:
                CadastrarProduto();
                break;
            case 2:
                Console.Clear();
                Environment.Exit(0);
                break;
            case 3:
                Console.Clear();
                Environment.Exit(0);
                break;
            case 4:
                Console.Clear();
                Environment.Exit(0);
                break;
            case 0:
                {
                    Console.Clear();
                    Environment.Exit(0);
                    break;
                }
            default:
                Show();
                break;
        }

    }
    static void DrawCanvas()
    {
        PrintLine();

        for (int i = 0; i < 12; i++)
        {
            Console.Write("|");
            for (int line = 0; line <= 30; line++)
            {
                Console.Write(" ");
            }
            Console.Write("|");
            Console.Write(Environment.NewLine);
        }
        PrintLine();
    }
    static void ShowOption()
    {
        Console.SetCursorPosition(2, 2);
        Console.WriteLine("VSBUG EDITOR v0.1");
        Console.SetCursorPosition(2, 3);
        Console.WriteLine("==============");

        Console.SetCursorPosition(2, 5);
        Console.WriteLine("1 - Cadastrar produto");
        Console.SetCursorPosition(2, 6);
        Console.WriteLine("2 - Consultar produto");
        Console.SetCursorPosition(2, 7);
        Console.WriteLine("3 - Modificar produto");
        Console.SetCursorPosition(2, 8);
        Console.WriteLine("4 - Excluir produto");
        Console.SetCursorPosition(2, 9);
        Console.WriteLine("0 - Sair");
        Console.SetCursorPosition(2, 11);
        Console.Write("Digite a opção: ");
    }
    static void PrintLine()
    {
        Console.Write("+");

        for (int i = 0; i <= 30; i++)
        {
            Console.Write("-");
        }

        Console.Write("+");
        Console.Write(Environment.NewLine);
    }
    
    static void CadastrarProduto()
    {
        Console.WriteLine("Cadastrar Produto");
    }
}



