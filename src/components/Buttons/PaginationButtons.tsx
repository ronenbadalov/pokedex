import { useEffect, useState } from "react";
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

  useEffect(() => {
    const pokeI = props.pokemons.results.indexOf(props.selectedPokemon);
    setCurPokeIndex(pokeI);
    if (pokeI + 1 === props.pokemons.results.length) setIsNextDisabled(true);
    else if (pokeI < props.pokemons.results.length) setIsNextDisabled(false);
    if (pokeI === 0) setIsPrevDisabled(true);
    else if (pokeI > 0) setIsPrevDisabled(false);
  }, [props]);

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
