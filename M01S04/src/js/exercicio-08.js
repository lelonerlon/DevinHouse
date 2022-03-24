let cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
],
    cidadesGrandes = [],
    cidadesOrdenadas = [];

cidadesGrandes = cidades.filter(function (cidade) {
    return cidade.populacao > 200000;
})

cidadesOrdenadas = cidadesGrandes.sort(function (a, b) {
    if (a.populacao < b.populacao) return 1;
    if (a.populacao > b.populacao) return -1;
    return 0;
})

console.log(cidadesGrandes)
