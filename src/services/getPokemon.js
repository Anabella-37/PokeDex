export default async function getPokemon(pokemon) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
	);
	const data = await response.json();

	const pokemonJSON = {
		imagen: data.sprites.front_default,
		nombre: data.name,
		hp: data.stats[0].base_stat,
		attack: data.stats[1].base_stat,
		defense: data.stats[2].base_stat,
		special_attack: data.stats[3].base_stat,
		special_defense: data.stats[4].base_stat,
		speed: data.stats[5].base_stat,
		types: data.types,
	};
	return pokemonJSON;
}
