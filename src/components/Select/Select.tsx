import React, { memo, useEffect } from "react";
import {
  PokemonResponseObject,
  PokemonResult,
} from "../../models/pokemon.model";
import { capitalizeName } from "../../utils/utils";
import classes from "./Select.module.scss";

type Props = {
  pokemons: PokemonResponseObject;
  setSelectedPokemon: (value: PokemonResult | undefined) => void;
};

const Select = (props: Props) => {
  const handlePokemonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: PokemonResult | undefined =
      props.pokemons.results.find((pokemon) => pokemon.name === e.target.value);
    props.setSelectedPokemon(selectedOption);
  };

  useEffect(() => {
    props.setSelectedPokemon(props.pokemons?.results[0]);
  }, [props.setSelectedPokemon, props.pokemons]);
  return (
    <div className={classes["container"]}>
      <select className={classes["select"]} onChange={handlePokemonChange}>
        {props.pokemons?.results.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {capitalizeName(pokemon.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
