const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const involvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Do83WnnQX6Sp7rhScHTF/likes/';

export const getPokemon = async (name = '?limit=12') => {
  const response = await fetch(baseUrl + name);
  return response.json();
};

export const sendLike = (name) => {
  fetch(involvement,{
    method: 'POST',
    body: JSON.stringify({"item_id": name}),
    headers: { 'Content-type': 'application/json' },
  }) 
}

export const getLike = async () => {
  const response = await fetch(involvement)
  return response.json();
}
