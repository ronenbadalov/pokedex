import { PokemonResponseObject } from "../models/pokemon.model";

export const getPokemons = async (): Promise<PokemonResponseObject> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return res.json();
};

export const getPokemonDescription = async (url: string | undefined) => {
  try {
    if (!url) return;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error While Trying To Fetch Pokemon");
    return res.json();
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
};

export const getPokemonAbilities = async (id: string | undefined) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
    if (!res.ok) throw new Error("Error While Trying To Fetch Pokemon");
    return res.json();
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
};

//
