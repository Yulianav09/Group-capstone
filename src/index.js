import PokemonList from './modules/pokemonList.js';
import './styles.css';
import './displayComment.css';

const container = document.querySelector('#container');
const myPokemon = new PokemonList(container);