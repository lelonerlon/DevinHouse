var operando1 = document.querySelector("#primeiro-valor");



operando1.addEventListener('input', function () {
    var num1 = parseInt(operando1.value);
    var numeroFinal = 0
    var arr = [];
    
    for (var i = 1; i <= 10; i++) {

        numeroFinal = (num1 * i);
        console.log(numeroFinal);
        arr.push(numeroFinal);
    }

    document.querySelector("#resultado").textContent = JSON.stringify(arr);
  
});
