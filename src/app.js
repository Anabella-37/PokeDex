// para realizar alguna tarea tienes que crear
// un archivo para tu tarea en la carpeta que creas
// conveniente 
// ejemplo:
// una llamada a una api iria en la carpeta helpers
// componentes html en components

// importanciones de archivos aqui.
import buscarPokemon from './helpers/consumoAPI.js';


// todas la funciones se llaman aqui.
document.addEventListener('DOMContentLoaded', async() => {
    const pokemon = await buscarPokemon('pikachu');
});

