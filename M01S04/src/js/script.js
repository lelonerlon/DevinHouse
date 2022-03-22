// var range = document.querySelector('input'),
//     value = document.querySelector('#age'),
//     alerta = document.querySelector("#alert");

// range.addEventListener('input', function () {
//     event.preventDefault();
//     value.textContent = this.value;

//     if (this.value <= 15) {
//         alertar("alert alert-primary", "VocÊ tá novinho");

//     } else if (this.value > 15 && this.value <= 64) {
//         alertar("alert alert-secondary", "VocÊ é Adulto");

//     } else {
//         alertar("alert alert-dange", "Você já é Idoso");
//     }
// });


// function alertar(classe, message) {
//     var wrapper = document.createElement('div');
//     var classe = classe;
//     wrapper.innerHTML = '<div class= "${classe}" role="alert">' + message + '</div>'
//     alerta.append(wrapper)

// }

var operando1 = document.querySelector("#primeiro-valor"),
    operando2 = document.querySelector("#segundo-valor"),
    select = document.querySelector("#autoSizingSelect"),
    resultado = document.querySelector("#resultado");



    operando2.addEventListener('input', function () {
    var num1 = parseInt(operando1.value),
        num2 = parseInt(operando2.value);
        selecao = select.value
        
        console.log(selecao)
    switch (selecao) {
        case '1':
            resultado.textContent = (num1 + num2);
            break;
        case '2':
            resultado.textContent = (num1 - num2);
            break;
        case '3':
            resultado.textContent = (num1 * num2);
            break;
        case '4':
            resultado.textContent = (num1 / num2);
            break;
        default:
            resultado.textContent = ("Operador Inválido");
    }

});
