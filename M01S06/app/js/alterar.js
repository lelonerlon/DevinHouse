const botaoAlterar = document.getElementById("btnAlterar");
const tituloPagina = document.getElementById('titulo');

botaoAlterar.addEventListener("click", function () {
    tituloPagina.textContent = ('Título da página Alterado');
});
