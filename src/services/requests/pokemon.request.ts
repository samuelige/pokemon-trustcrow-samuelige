import api from '../interceptor';

export const requestPokemonData = async (query_string: string) => {
  return await api.get(`${query_string}`);
};

export const requestSinglePokemon = async (id: string) => {
  return await api.get(`?apikey=c56f189e&i=${id}`);
};