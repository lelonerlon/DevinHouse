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

var botaoEvento = document.getElementById("btn-header-evento");

botaoEvento.addEventListener("click", function () {

    alert('Devido as retrições por conta do COVID, estamos sem eventos no momento.', 'success')

    event.preventDefault();

    return;
});


var nome = document.getElementById("name");
var typedLastName = prompt("Informe seu Sobrenome");
var typedName = prompt("Informe seu Nome");

// var typedYearBirth = parseInt(prompt("Informe seu ano de nascimento!"));
// var typedCurrentYear = parseInt(prompt("Informe o ano atual"));

// alert("A sua idade é " + (typedCurrentYear - typedYearBirth) + " anos, ou " + ((typedCurrentYear - typedYearBirth) - 1) + " anos");

// alert("Olá " + typedLastName.toUpperCase() + ". Seu sobrenome contém" + typedLastName.length +" letras!")


if (typedName == "") {

    typedName = "";
    nome.innerHTML = "";
}

else {
    nome.innerHTML = ("Bem vindo " + typedName + " " + typedLastName);
    // lastName.innerHTML = typedLastName; 
}