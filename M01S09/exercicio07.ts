import { Pessoa } from './exercicio08'

class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    matricula: number;
    cadeira: string[];
   

    constructor(nome: string, idade: number, rua: string, matricula: number, cadeira: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeira = cadeira;
        
    }

    cadastrar(valor) {
        console .log(valor)              
    }
}

class Funcionario implements Pessoa{
    nome: string;
    idade: number;
    rua: string;
    identificador: number;
    setor: string;

    constructor(nome: string, idade: number, rua: string, identificador: number, setor: string){
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }

    cadastrar(valor) {
        console.log(valor)
    }
}


let aluno1 = new Aluno('Joaozinho', 20, 'Rua A', 1009878, ['matemática']);
aluno1.cadastrar(aluno1);

let funcionario1 = new Funcionario('Miguel', 50, 'Rua B', 3178, 'Administrativo');
funcionario1.cadastrar(funcionario1);