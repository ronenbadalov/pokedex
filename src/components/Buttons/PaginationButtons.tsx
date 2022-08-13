import React, { useCallback, useEffect, useState } from "react";
import {
  PokemonResponseObject,
  PokemonResult,
} from "../../models/pokemon.model";
import Button from "./Button";
import classes from "./PaginationButtons.module.scss";
type Props = {
  selectedPokemon: PokemonResult;
  pokemons: PokemonResponseObject;
  setSelectedPokemon: (value: PokemonResult) => void;
};

const PaginationButtons = (props: Props) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [curPokeIndex, setCurPokeIndex] = useState<number>(0);

  const handleNext = () => {
    props.setSelectedPokemon(props.pokemons.results[curPokeIndex + 1]);
  };

  const handlePrev = () => {
    props.setSelectedPokemon(props.pokemons.results[curPokeIndex - 1]);
  };

  const checkIfThereIsNext = useCallback(
    (pokeI: number) => {
      if (pokeI + 1 === props.pokemons.results.length && !isNextDisabled)
        setIsNextDisabled(true);
      else if (pokeI < props.pokemons.results.length && isNextDisabled)
        setIsNextDisabled(false);
    },
    [props.pokemons.results, setIsNextDisabled, isNextDisabled]
  );

  const checkIfThereIsPrev = useCallback(
    (pokeI: number) => {
      if (pokeI === 0 && !isPrevDisabled) setIsPrevDisabled(true);
      else if (pokeI > 0 && isPrevDisabled) setIsPrevDisabled(false);
    },
    [setIsPrevDisabled, isPrevDisabled]
  );

  useEffect(() => {
    const pokeI = props.pokemons.results.indexOf(props.selectedPokemon);
    setCurPokeIndex(pokeI);
    checkIfThereIsNext(pokeI);
    checkIfThereIsPrev(pokeI);
  }, [props, checkIfThereIsNext, checkIfThereIsPrev, isNextDisabled]);

  return (
    <div className={classes["paginationBtns"]}>
      <Button onClick={handlePrev} disabled={isPrevDisabled}>
        Previous
      </Button>
      <Button onClick={handleNext} disabled={isNextDisabled}>
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
