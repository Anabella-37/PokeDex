import getPokemon from './services/getPokemon';

document.addEventListener('DOMContentLoaded', async () => {
	const pokemon = await getPokemon('Pokemon');
	return pokemon;
});
