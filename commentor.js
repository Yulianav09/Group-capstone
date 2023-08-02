// Function to fetch comments for a given Pokemon
function getCommentsForPokemon(pokemonName) {
  fetch(`/api/comments/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
          displayComments(data.comments);
      })
      .catch((error) => {
          console.error('Error fetching comments:', error);
      });
}

// Function to display comments in the popup
function displayComments(comments) {
  const commentsContainer = document.createElement('div');
  comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
  });

  const popup = document.getElementById('popup');
  popup.appendChild(commentsContainer);
}

// Function to display the popup with selected item's details
function showPopup(pokemonName) {
  // ... (existing code)

  // Fetch and display comments for the selected Pokemon
  getCommentsForPokemon(pokemonName);

}
