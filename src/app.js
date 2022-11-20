import getPokemon from './services/getPokemonByName';

document.addEventListener('DOMContentLoaded', async () => {
	const pokemon = await getPokemon('Pokemon');
	return pokemon;
});
