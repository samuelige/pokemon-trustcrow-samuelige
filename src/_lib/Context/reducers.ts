import { Action } from "./types";

export type State = {
    loading: boolean;
    allPokemon: any[]; 
    next: string | null;
    pokemon: any; 
    pokemonDataBase: any[]; 
    searchResults: any[]; 
};


export const pokemoIntitialState: State = {
    allPokemon: [],
    pokemon: {},
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
};

export const pokemonReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'LOADING':
        return { ...state, loading: true };
  
      case 'GET_ALL_POKEMON':
        return {
          ...state,
          allPokemon: action.payload.results,
          next: action.payload.next,
          loading: false,
        };
  
      case 'GET_POKEMON':
        return { ...state, pokemon: action.payload, loading: false };
  
      case 'GET_POKEMON_DATABASE':
        return { ...state, pokemonDataBase: action.payload, loading: false };
  
      case 'GET_SEARCH':
        return { ...state, searchResults: action.payload, loading: false };
  
      case 'NEXT':
        return {
          ...state,
          allPokemon: [...state.allPokemon, ...action.payload.results],
          next: action.payload.next,
          loading: false,
        };
    }
  
    return state;
  };