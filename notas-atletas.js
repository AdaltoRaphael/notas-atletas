let atletas = [
    {
        nome: 'Cesar Abascal',
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: 'Fernando Puntel',
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: 'Daiane Jelinsky',
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: 'Bruno Castro',
        notas: [10, 10, 10, 9, 9.5]
    }
]

let mediaAtletas = atletas.map(function(atleta) {
    return {
        nome: atleta.nome,
        notas: atleta.notas.sort(function(a,b) {
            return a - b
        }),
        notas: atleta.notas.slice(1,4),
        media: atleta.notas = atleta.notas.reduce(function(total, atual) {
            return total + atual / 3
        },0)
    }
})


console.log(mediaAtletas)