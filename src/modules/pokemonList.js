import showPopup from './displayComment.js';
import getPokemon from './API.js';

export default class PokemonList {
  constructor(container) {
    this.container = container;
    this.list = [];
  }

  fetchList = async () => {
    const response = await getPokemon();
    this.list = await response.results;
    this.list.forEach(async (element) => {
      const pokemonDetails = await getPokemon(element.name);
      const picture = pokemonDetails.sprites.other.dream_world.front_default;
      element.sprite = picture;
      this.#addPokemon(element);
    });
  }

  #addPokemon = (pokemon) => {
    const pokemonItem = document.createElement('div');
    pokemonItem.classList.add('pokemonItem');

    pokemonItem.innerHTML = `
    <div class= "pokemonImg"><img src="${pokemon.sprite}" alt="pokemon ${pokemon.name}"></div>
    <h2>${pokemon.name}</h2><button>♡</button>
    <p>0 likes</p>
    <button class="commentButton">Comments</button>
    `;
    const commentButton = pokemonItem.querySelector('.commentButton');
    commentButton.addEventListener('click', () => { showPopup(pokemon.name); });
    this.container.appendChild(pokemonItem);
  }
}