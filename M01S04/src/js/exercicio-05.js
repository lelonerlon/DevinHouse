const botaoExibir = document.querySelector('#enviar');
const exibir = document.getElementById('resultado');
let animalCompleto = '';


botaoExibir.addEventListener('click', function () {

    const animais = [
        { animal: 'Cachorro', raca: 'Akita' },
        { animal: 'Cachorro', raca: 'Boxer' },
        { animal: 'Cachorro', raca: 'Dálmata' },
        { animal: 'Cachorro', raca: 'Pastor alemão' },
        { animal: 'Gato', raca: 'Persa' },
        { animal: 'Gato', raca: 'Sphynx' },
        { animal: 'Gato', raca: 'Siamês' },
    ]


    animais.forEach(function (animal) {
            
        console.log(animal.animal + ':', animal.raca)
        animalCompleto = animal.animal + ': '+ animal.raca;
        exibirTela(animalCompleto)

    });

});

function exibirTela(animal) {
    let item = document.createElement("li")
    item.innerText = animal;
    exibir.append(item)
}

