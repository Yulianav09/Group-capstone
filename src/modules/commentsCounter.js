export default () => {
  const comments = document.querySelectorAll('.comment').length;
  const commentsCounter = document.querySelector('#commentsCounter');
  commentsCounter.innerHTML = `Comments (${comments})`;
};