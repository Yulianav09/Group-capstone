// Function to fetch the comments count for a given Pokemon
function getCommentsCountForPokemon(pokemonName) {
  fetch(`/api/comments/${pokemonName}/count`)
      .then((response) => response.json())
      .then((data) => {
          displayCommentsCount(data.commentsCount);
      })
      .catch((error) => {
          console.error('Error fetching comments count:', error);
      });
}

// Function to display the comments count in the popup
function displayCommentsCount(commentsCount) {
  const commentsCountElement = document.createElement('p');
  commentsCountElement.textContent = `Comments: ${commentsCount}`;
  // Assuming you have a DOM element where you want to display the comments count
  const commentsCountContainer = document.getElementById('comments-count-container');
  commentsCountContainer.innerHTML = ''; // Clear any previous count
  commentsCountContainer.appendChild(commentsCountElement);
}

// Function to display the popup with selected item's details
function showPopup(pokemonName) {
  // ... (existing code)

  // Fetch and display comments count for the selected Pokemon
  getCommentsCountForPokemon(pokemonName);

  // ... (existing code)
}
