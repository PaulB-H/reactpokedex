import React, { useState, useEffect, Fragment } from "react";
import "../App.css";

import Buttons from "./Buttons";
import Header from "./Header";
import Spinner from "./Spinner";
import PokemonName from "./PokemonName";
import PokemonImg from "./PokemonImg";
import FlavorText from "./FlavorText";

const axios = require("axios");

const Pokedex = () => {
  // Set initial states
  const [pokemon, setPokemon] = useState({});
  const [species, setSpecies] = useState({});
  const [loading, setLoading] = useState(false);

  // Load initial Pokemon
  // useEffect with empty brackets mimics componentDidMount
  useEffect(() => {
    console.clear();
    setLoading(true);
    async function fetchData() {
      const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/1/`);
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/1/`
      );
      setPokemon(pokemon.data);
      setSpecies(species.data);
      setLoading(false);
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  // Get random pokemon
  async function getRandomPokemon() {
    setLoading(true);
    let rand = Math.ceil(Math.random() * 875);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${rand}/`
    );
    const species = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${rand}/`
    );
    setPokemon(pokemon.data);
    setSpecies(species.data);
    setLoading(false);
  }

  // Get random classic pokemon
  async function getRandomOGPokemon() {
    setLoading(true);
    let rand = Math.ceil(Math.random() * 150);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${rand}/`
    );
    const species = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${rand}/`
    );
    setPokemon(pokemon.data);
    setSpecies(species.data);
    setLoading(false);
  }

  return (
    <div id="container">
      <Header />

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <PokemonName pokemonName={pokemon.name} />

          <PokemonImg sprite={pokemon.sprites} pokemonName={pokemon.name} />

          <FlavorText species={species} />
        </Fragment>
      )}

      <Buttons
        getRandomPokemon={getRandomPokemon}
        getRandomOGPokemon={getRandomOGPokemon}
      />
    </div>
  );
};

export default Pokedex;
