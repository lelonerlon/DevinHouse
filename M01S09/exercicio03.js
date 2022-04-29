var aluno = /** @class */ (function () {
    function aluno() {
    }
    return aluno;
}());
var estudante = new aluno();
estudante.nome = 'Erlon';
estudante.matricula = 123131;
estudante.ativo = true;
estudante.cadeiras = ['português', 'matemática'];
console.log(estudante);
