const botaoCalculadora = document.getElementById("btn-calcular");

botaoCalculadora.addEventListener("click", function () {
    const numero1 = Number(document.getElementById("operador-1").value);
    const numero2 = Number(document.getElementById("operador-2").value);
    const tipoOperacao = document.getElementById("operacao").value;
    // const value = tipoOperacao.options[tipoOperacao.selectedIndex].value;
    const resultado = document.getElementById('resultado');


    switch (tipoOperacao) {
        case "1":
            resultado.innerHTML = numero1 + numero2;
            break;
        case "2":
            resultado.innerHTML = numero1 - numero2;
            break;
        case "3":
            resultado.innerHTML = numero1 * numero2;
            break;
        case "4":
            resultado.innerHTML = numero1 / numero2;
            break;
        default:
            resultado.innerHTML = 'Operação inválida. Escolha uma operação'

    }


});