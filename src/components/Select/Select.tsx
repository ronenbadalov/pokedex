import React, { memo, useEffect, useState } from "react";
import {
  PokemonResponseObject,
  PokemonResult,
} from "../../models/pokemon.model";
import { capitalizeName } from "../../utils/utils";
import classes from "./Select.module.scss";

type Props = {
  pokemons: PokemonResponseObject;
  setSelectedPokemon: (value: PokemonResult) => void;
  selectedPokemon: PokemonResult;
};

const Select = (props: Props) => {
  const [selectVal, setSelectVal] = useState(props.pokemons.results[0].name);
  const handlePokemonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(e.target.value);
    const selectedOption: PokemonResult | undefined =
      props.pokemons.results.find((pokemon) => pokemon.name === e.target.value);
    if (selectedOption) props.setSelectedPokemon(selectedOption);
  };
  const { pokemons, setSelectedPokemon } = props;
  useEffect(() => {
    setSelectedPokemon(pokemons.results[0]);
  }, [pokemons, setSelectedPokemon]);
  useEffect(() => {
    setSelectVal(props.selectedPokemon.name);
  }, [props]);
  return (
    <div className={classes["container"]}>
      <select
        className={classes["select"]}
        onChange={handlePokemonChange}
        value={selectVal}
      >
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
