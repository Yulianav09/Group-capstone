const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (name ='') => {
  const response = await fetch(baseUrl+name);
  return response.json();
};