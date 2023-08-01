import { getPokemon} from './API.js';

export default class PokemonList {
  constructor(container) {
    this.container = container;
    this.list = [];
    this.#fetchList();
  }

  #fetchList = async () => {
    const response = await getPokemon();
    this.list = await response.results;
    this.list.forEach(async (element) => {
      const pokemonDetails = await getPokemon(element.name)
      const picture = pokemonDetails.sprites.other.dream_world.front_default
      element.sprite = picture
      this.#addPokemon(element);
    });
  }

  #addPokemon = (pokemon) => {
    const pokemonItem = document.createElement('div');
    pokemonItem.classList.add('pokemonItem');

    pokemonItem.innerHTML = `
    <div><img src="${pokemon.sprite}" alt="pokemon ${pokemon.name}"></div>
    <h2>${pokemon.name}</h2><button>♡</button>
    <p>0 likes</p>
    <button>Comments</button>
    `;
    this.container.appendChild(pokemonItem);
  }
}