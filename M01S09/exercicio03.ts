class aluno {

    nome: string;
    matricula: number ;
    ativo: boolean; 
    cadeiras: string[];

}

let estudante = new aluno();
estudante.nome = 'Erlon';
estudante.matricula = 123131;
estudante.ativo = true;
estudante.cadeiras = ['português','matemática']

console.log(estudante)