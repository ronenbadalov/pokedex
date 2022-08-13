export type PokemonResponseObject = {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
};

export type PokemonResult = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  description: string;
};

// export type PokemonResponseStateOptions = PokemonResponseObject | undefined;
