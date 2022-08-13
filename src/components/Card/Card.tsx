import { useEffect, useState } from "react";
import { getPokemonAbilities, getPokemonDescription } from "../../api/api";
import { Pokemon, PokemonResult } from "../../models/pokemon.model";
import { capitalizeName } from "../../utils/utils";
import classes from "./Card.module.scss";
type Props = {
  selectedPokemon: PokemonResult | undefined;
};

const Card = (props: Props) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>({
    id: 1,
    name: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (!props.selectedPokemon?.url) return;
      const data = await getPokemonDescription(props.selectedPokemon?.url);
      const abilityData = await getPokemonAbilities(data.id);
      setPokemonData({
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        description: abilityData.effect_entries[1].effect,
      });
    })();
  }, [props.selectedPokemon]);
  return (
    <div className={classes.card}>
      <div className={classes.imgBox}>
        <img src={pokemonData.image} alt={pokemonData.name} loading="lazy" />
      </div>
      <h1>{capitalizeName(pokemonData.name)}</h1>
      <div className={classes["abilities"]}>
        <p>{pokemonData.description}</p>
      </div>
    </div>
  );
};

export default Card;
