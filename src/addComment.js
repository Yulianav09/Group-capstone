// // Function to add a new comment using the backend API
// function addComment(pokemonName, comment) {
//   fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       pokemonName,
//       comment,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Comment added successfully:', data);
//       // Update the UI to display the newly added comment (optional)
//     })
//     .catch((error) => {
//       console.error('Error adding comment:', error);
//     });
// }

// // Function to display the popup with selected item's details
// function showPopup(pokemonName) {
//   // ... (existing code)

//   const commentForm = document.createElement('form');
//   const commentInput = document.createElement('textarea');
//   commentInput.placeholder = 'Enter your comment...';
//   const submitButton = document.createElement('button');
//   submitButton.textContent = 'Submit Comment';

//   commentForm.appendChild(commentInput);
//   commentForm.appendChild(submitButton);
//   popup.appendChild(commentForm);

//   submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     const newComment = commentInput.value.trim();
//     if (newComment !== '') {
//       addComment(pokemonName, newComment);
//     }
//     commentInput.value = '';
//   });

//   // ... (existing code)
// }
