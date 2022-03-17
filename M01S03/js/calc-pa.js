var botaoCalculadora = document.getElementById("btn-calculadora");

botaoCalculadora.addEventListener("click", function () {


    var valor1 = parseInt(prompt("Informe o valor:"));
    var valor2 = parseInt(prompt("Informe a Raiz:"))
    var result = [];
    var pA = 0;

    for (var cont = 0; cont < 10; cont++) {
       
        result.push(valor1);
        valor1 += valor2;
        
    }


    alert(result);

    event.preventDefault();


});