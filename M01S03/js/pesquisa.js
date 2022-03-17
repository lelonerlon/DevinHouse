var botaoPesquisa = document.getElementById("btn-pesquisa");

botaoPesquisa.addEventListener("click", function () {

    var nomePesquisa = prompt("Informe o nome");
    var idadePesquisa = parseInt(prompt("Informe sua idade"));
    var atividadeFisica = confirm("Você pratica atividade fisica?");

    if (atividadeFisica == true) {
        atividadeFisica = "SIM";
    }

    else {
        atividadeFisica = "NÃO"
    }

    var resultado = (nomePesquisa + " você está com " + idadePesquisa + " anos de Idade, e " + atividadeFisica + " pratica atividades fisica");

    alert(resultado);


    event.preventDefault();

    return;
});