import { getScores, sendScore } from './API.js';

export default class PokemonList {
  constructor(container) {
    this.container = container;
    this.list = [];
    this.#fetchList();
  }

  #fetchList = async () => {
    const response = await getScores();
    this.list = await response.result;
    this.list.forEach((element) => { this.#addPokemon(element); });
  }

  #addPokemon = (pokemon) => {
    const pokemonItem = document.createElement('div');
    pokemonItem.classList.add('pokemonItem');

    pokemonItem.innerHTML = `
    <div><img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="pokemon"></div>
    <h2>Bulbasaur</h2><button>♡</button>
    <p>0 likes</p>
    <button>Comments</button>
    `;
    this.container.appendChild(pokemonItem);
  }
}