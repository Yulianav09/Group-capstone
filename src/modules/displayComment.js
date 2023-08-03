import { addComment, getCommentsForPokemon } from "./API";

// Function to fetch Pokemon data from the PokeAPI
async function getPokemonDetails(pokemonName) {
  let data = {};
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return data;
}

// Function to close the popup

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Function to display the popup with selected item's details
export default function showPopup(pokemonName) {
  const popup = document.getElementById('popup');
  getPokemonDetails(pokemonName)
    .then((data) => {
      const html = `
            <button id="closeButton">&#x2715</button>
            <div class= "pokemonImg"><img src="${data.sprites.other.dream_world.front_default}" alt="pokemon ${data.name}"></div>
            <h2>${data.name.toUpperCase()}</h2>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <div id="commentsContainer"></div>
            <!-- Add more details here based on the PokeAPI response -->
          `;
      popup.innerHTML = html;
      const closeButton = popup.querySelector('#closeButton');
      closeButton.addEventListener('click', () => {
        closePopup();
      });

      const displayComments = async () => {
        getCommentsForPokemon(pokemonName)
              .then((comments) => {
                if (comments?.error != undefined) throw comments
                commentsContainer.innerHTML=''
                comments.forEach((comment) => {
                    const commentElement = document.createElement('p');
                    commentElement.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
                    commentsContainer.appendChild(commentElement);
                });
              }).catch(error=>{
                console.warn('No comments found:', error);
              })
      }

      const commentsContainer = popup.querySelector('#commentsContainer');
      popup.appendChild(commentsContainer);
      displayComments()

          const commentForm = document.createElement('form');
          const nameInput = document.createElement('input');
          nameInput.required = true
          nameInput.placeholder = 'Your name...';
          const commentInput = document.createElement('textarea');
          commentInput.required = true
          commentInput.placeholder = 'Your insights...';
          const submitButton = document.createElement('button');
          submitButton.textContent = 'Comment';

          commentForm.appendChild(nameInput);
          commentForm.appendChild(commentInput);
          commentForm.appendChild(submitButton);
          popup.appendChild(commentForm);

          commentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const userName = nameInput.value.trim();
            const newComment = commentInput.value.trim();
            if (newComment !== '' && userName !== '') {
              addComment(pokemonName,userName, newComment)
              .then(()=>displayComments());
            }
            commentInput.value = '';
            nameInput.value = '';
            
          });

          popup.style.display = 'grid';
      
    })
    .catch((error) => {
      console.error('Error:', error);
      popup.style.display = 'none';
    });
}


// Close popup when clicking outside of it
document.querySelector('body').addEventListener('click', (event) => {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    closePopup();
  }
});
