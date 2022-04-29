class Animal {
    nome: string;
    raca: string;
    corPelagem: string;
    peso: number

    constructor(nome: string, raca: string, corPelagem: string, peso: number){
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso
    }
}

let animal = new Animal('Bilu', 'Vira-lata', 'Mistureba', 12);

console.log(animal)