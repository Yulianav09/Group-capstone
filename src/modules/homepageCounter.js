export default () => {
  const cards = document.querySelectorAll('.pokemonItem').length;
  const pokemonCounter = document.querySelector('#pokemonCounter');
  pokemonCounter.innerHTML = `Pokemons(${cards})`;
};