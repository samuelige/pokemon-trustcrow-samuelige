import { createContext } from 'react';

interface I_AppContext {
  allPokemonData: any[]
  searchResults: any[],
  next: ()=>void
  getPokemon: any ,
  loading:boolean,
  realTimeSearch: (search: string)=>void,
  pokemon: any; 
}

const AppContext = createContext<I_AppContext>({} as I_AppContext);

export default AppContext;