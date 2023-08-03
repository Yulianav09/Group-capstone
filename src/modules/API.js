const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const involvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Do83WnnQX6Sp7rhScHTF/';

export const getPokemon = async (name = '?limit=12') => {
  const response = await fetch(baseUrl + name);
  return response.json();
};

export const sendLike = (name) => {
  fetch(`${involvement}likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: name }),
    headers: { 'Content-type': 'application/json' },
  });
};

export const getLike = async () => {
  const response = await fetch(`${involvement}likes/`);
  return response.json();
};

export const addComment = async (pokemonName, user, comment) => fetch(`${involvement}comments`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    item_id: pokemonName,
    username: user,
    comment,
  }),
})
  .catch((error) => {
    console.error('Error adding comment:', error);
  });

export const getCommentsForPokemon = async (pokemonName) => fetch(`${involvement}comments?item_id=${pokemonName}`)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    console.warn('Error fetching comments:', error);
  });
