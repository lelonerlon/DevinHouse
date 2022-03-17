var botaoCalculadora = document.getElementById("btn-calculadora");

botaoCalculadora.addEventListener("click", function () {

    let valor = true;

    while (valor == true) {

        var tipoOperacao = prompt("Qual tipo de cálculo ele deseja fazer? Soma: '+', Subitração: '-', Multiplicação: '*' ou Divisão: '/'");

        if ((tipoOperacao == '+') || (tipoOperacao == '-') || (tipoOperacao == '*') || (tipoOperacao == '+')) {

            var valor1 = parseInt(prompt("Informe o PRIMEIRO valor:"));
            var valor2 = parseInt(prompt("Informe o SEGUNDO valor:"));

            if (tipoOperacao == '+') {
                valor = false;
                var resultado = (valor1 + valor2);
                alert("O Resultado é: " + resultado);
            } else if (tipoOperacao == '-') {
                valor = false;
                var resultado = (valor1 - valor2);
                alert("O Resultado é: " + resultado);
            } else if (tipoOperacao == '*') {
                valor = false;
                var resultado = (valor1 * valor2);
                alert("O Resultado é: " + resultado);
            } else if (tipoOperacao == '/') {
                valor = false;
                var resultado = (valor1 / valor2);
                alert("O Resultado é: " + resultado);

            }
        }

        else {
            alert("Tipo de operação inválida");
        }

    }

    event.preventDefault();

    return;
});
