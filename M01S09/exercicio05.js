var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return Animal;
}());
var animal = new Animal('Bilu', 'Vira-lata', 'Mistureba', 12);
console.log(animal);
