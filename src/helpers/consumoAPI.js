async function buscarPokemon(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const pokemonJSON = await response.json();
    return pokemonJSON;
}

export default buscarPokemon;
