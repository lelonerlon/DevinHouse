var botaoContato = document.getElementById("btn-header-contato");

botaoContato.addEventListener("click", function () {

    alert('Estamos em construção!', 'success')

    event.preventDefault();

    return;
});

var botaoFoto = document.getElementById("btn-header-foto");

botaoFoto.addEventListener("click", function () {

    alert('Devido as retrições por conta do COVID, estamos sem eventos no momento.', 'success')

    event.preventDefault();

    return;
}); 

var botaoEvento =  document.getElementById("btn-header-evento");

botaoEvento.addEventListener("click", function () {

    alert('Devido as retrições por conta do COVID, estamos sem eventos no momento.', 'success')

    event.preventDefault();

    return;
}); 


var nome = document.getElementById("name");
// var lastName = document.getElementById("last-name");
var typedName = prompt("Informe seu Nome");
// var typedLastName = prompt("Informe seu Sobrenome");

nome.innerHTML = "";
// lastName.innerHTML = "";

nome.innerHTML = ("Bem vindo " + typedName);
// lastName.innerHTML = typedLastName; 