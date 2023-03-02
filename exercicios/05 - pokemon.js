
const pokemons = [
    {
        name: "Pikachu",
        type: "Eletric"
    },
    {
        name: "Eletrictabuzz",
        type: "Eletric"
    },
    {
        name: "Squirdle",
        type: "water"
    },
    {
        name: "Magikarp",
        type: "water"
    }
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsPorTipo
}, {})

console.log(pokemonsPorTipo);