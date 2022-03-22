var operando1 = document.querySelector("#primeiro-valor"),
    resultado = document.querySelector("#resultado");



operando1.addEventListener('input', function () {
    var num1 = parseInt(operando1.value);

    if (num1 % 2 == 0) {

        resultado.textContent = ("Número Informado é PAR");
    }

    else {
        resultado.textContent = ("Número informado é ÍMPAR");
    }

});