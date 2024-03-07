export type Action =
    | { type: 'LOADING' }
    | { type: 'GET_ALL_POKEMON'; payload: { results: any[]; next: string } }
    | { type: 'GET_POKEMON'; payload: any } 
    | { type: 'GET_POKEMON_DATABASE'; payload: any } 
    | { type: 'GET_SEARCH'; payload: any[] } 
    | { type: 'NEXT'; payload: { results: any[]; next: string } };

export const LOADING = "LOADING";
export const GET_POKEMON = "GET_POKEMON";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_SEARCH = "GET_SEARCH";
export const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
export const NEXT = "NEXT";