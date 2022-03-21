var range = document.querySelector('input'),
    value = document.querySelector('#age'),
    alerta = document.querySelector("#alert");

range.addEventListener('input', function () {
    event.preventDefault();
    value.textContent = this.value;

    if (this.value <= 15) {
        alertar("alert alert-primary", "VocÊ tá novinho");

    } else if (this.value > 15 && this.value <= 64) {
        alertar("alert alert-secondary", "VocÊ é Adulto");

    } else {
        alertar("alert alert-dange", "Você já é Idoso");
    }
});


function alertar(classe, message) {
    var wrapper = document.createElement('div');
    var classe = classe;
    wrapper.innerHTML = '<div class= "${classe}" role="alert">' + message + '</div>'
    alerta.append(wrapper)

}
