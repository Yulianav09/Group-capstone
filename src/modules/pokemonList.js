import showPopup from './displayComment.js';
import { getLike, getPokemon,  sendLike } from './API.js';

export default class PokemonList {
  constructor(container) {
    this.container = container;
    this.list = [];
  }

  // Get all the pokemons to display
  fetchList = async () => {
    const response = await getPokemon();
    this.list = await response.results;
    await this.#fetchLikes()
    this.list.forEach(async (element) => {
      const pokemonDetails = await getPokemon(element.name);
      const picture = pokemonDetails.sprites.other.dream_world.front_default;
      element.sprite = picture;
      this.#addPokemon(element);
    });
  }

  // get all the likes saved in the API
  #fetchLikes = async () => {
    const response = await getLike();
    response.forEach(element => {
      this.list.forEach(pokemon => {
        if (pokemon.likes === undefined) pokemon.likes = 0
        if (pokemon.name === element.item_id) {
          pokemon.likes = element.likes
        }
      })
    })
  }

  #addPokemon = (pokemon) => {
    const pokemonItem = document.createElement('div');
    pokemonItem.classList.add('pokemonItem');

    pokemonItem.innerHTML = `
    <div class= "pokemonImg"><img src="${pokemon.sprite}" alt="pokemon ${pokemon.name}"></div>
    <h2>${pokemon.name}</h2><button class="likeButton">♡</button>
    <p class="likesCounter">${pokemon.likes} likes</p>
    <button class="commentButton">Comments</button>
    `;
    const commentButton = pokemonItem.querySelector('.commentButton');
    const likeButton = pokemonItem.querySelector('.likeButton');
    const likesCounter = pokemonItem.querySelector('.likesCounter');
    commentButton.addEventListener('click', () => { showPopup(pokemon.name); });
    this.container.appendChild(pokemonItem);

    likeButton.addEventListener('click', () => {
      sendLike(pokemon.name)
      pokemon.likes += 1
      likesCounter.innerHTML=`${pokemon.likes} likes`
    })
  }
}