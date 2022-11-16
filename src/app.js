import buscarPokemon from './helpers/consumoAPI.js';

document.addEventListener('DOMContentLoaded', async () => {
  const pokemon = await buscarPokemon('charizard');
  console.log(pokemon);
});

