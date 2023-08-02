// Function to fetch Pokemon data from the PokeAPI
async function getPokemonDetails(pokemonName) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Function to display the popup with selected item's details
function showPopup(pokemonName) {
  const popup = document.getElementById('popup');
  getPokemonDetails(pokemonName)
      .then((data) => {
          const html = `
              <h2>${data.name.toUpperCase()}</h2>
              <p>Height: ${data.height}</p>
              <p>Weight: ${data.weight}</p>
              <!-- Add more details here based on the PokeAPI response -->
          `;
          popup.innerHTML = html;
          popup.style.display = 'block';
      })
      .catch((error) => {
          console.error('Error:', error);
          popup.style.display = 'none';
      });
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Create a list of Pokemon items
const pokemonList = ['bulbasaur', 'charmander', 'squirtle']; // Add more Pokemon names here

// Dynamically generate the Pokemon list cards
const pokemonListContainer = document.querySelector('.pokemon-list');
pokemonList.forEach((pokemonName) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');
  pokemonCard.textContent = pokemonName.toUpperCase();
  pokemonCard.addEventListener('click', () => showPopup(pokemonName));
  pokemonListContainer.appendChild(pokemonCard);
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      closePopup();
  }
});
