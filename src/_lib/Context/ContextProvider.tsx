"use client";
import { useEffect, useReducer, useState } from "react";
import { debounce } from "lodash";
import AppContext from "./contextApi";
import { pokemoIntitialState, pokemonReducer } from "./reducers";
import { baseUrl } from "@/services/helper";
import { GET_ALL_POKEMON, GET_POKEMON, GET_POKEMON_DATABASE, GET_SEARCH, LOADING } from "./types";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(pokemonReducer, pokemoIntitialState);
  const [allPokemonData, setAllPokemonData] = useState<any[]>([]);

  const allPokemon = async () => {
    dispatch({ type: LOADING });

    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    dispatch({ type: GET_ALL_POKEMON, payload: data });

    //fetch character data
    const allPokemonData = [];

    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      allPokemonData.push(pokemonData);
    }

    setAllPokemonData(allPokemonData);
  };

  //get pokemon
  const getPokemon = async (name: string) => {
    dispatch({ type: LOADING });

    const res = await fetch(`${baseUrl}pokemon/${name}`);
    const data = await res.json();

    dispatch({ type: GET_POKEMON, payload: data });
  };

  //get all pokemon data
  const getPokemonDatabase = async () => {
    dispatch({ type: LOADING });

    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    dispatch({ type: GET_POKEMON_DATABASE, payload: data.results });
  };

  //next page
  const next = async () => {
    dispatch({ type: LOADING });
    const res = await fetch(state.next || "");
    const data = await res.json();
    dispatch({ type: "NEXT", payload: data });

    //fetch the new pokemon data
    const newPokemonData = [];
    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      newPokemonData.push(pokemonData);
    }

    //add new pokemon data to the old pokemon data
    setAllPokemonData([...allPokemonData, ...newPokemonData]);
  };

  //real time search
  const realTimeSearch = debounce(async (search) => {
    dispatch({ type: LOADING });
    //search pokemon database
    const res = state.pokemonDataBase.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });

    dispatch({ type: GET_SEARCH, payload: res });
  }, 500);

  //initial fetch
  useEffect(() => {
    getPokemonDatabase();
    allPokemon();
  }, []);
 
  return (
    <AppContext.Provider
      value={{
        ...state,
        allPokemonData,
        getPokemon,
        realTimeSearch,
        next,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
