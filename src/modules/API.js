const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (name = '?limit=12') => {
  const response = await fetch(baseUrl+name);
  return response.json();
};