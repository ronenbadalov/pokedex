import { useEffect, useState } from "react";
import { getPokemons } from "./api/api";
import "./App.scss";
import Select from "./components/Select/Select";
import { PokemonResponseObject, PokemonResult } from "./models/pokemon.model";
import Card from "./components/Card/Card";

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonResponseObject>({
    count: 0,
    next: "",
    previous: "",
    results: [{ name: "", url: "" }],
  });
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonResult | undefined
  >();

  useEffect(() => {
    (async () => {
      const data: PokemonResponseObject = await getPokemons();
      setPokemons(data);
    })();
  }, []);
  return (
    <div className="App">
      <Select pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} />
      <Card selectedPokemon={selectedPokemon} />
    </div>
  );
};

export default App;
