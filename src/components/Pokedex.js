import React, { useState, useEffect, Fragment } from "react";
import "../App.css";

import Buttons from "./Buttons";
import Header from "./Header";
import Spinner from "./Spinner";
import PokemonName from "./PokemonName";
import PokemonImg from "./PokemonImg";

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

  // Return first English entry from
  // flavor_text_entries array using arr.find()
  function checkEng(entry) {
    if (entry.language.name === "en") {
      return entry.flavor_text;
    }
  }

  // Regex pattern to find any metachars
  // such as /n which are in some flav text entries
  const flavRegex = /\\./gi;

  return (
    <div id="container">
      <Header />

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <PokemonName pokemonName={pokemon.name} />

          <PokemonImg sprite={pokemon.sprites} pokemonName={pokemon.name} />

          <p id="flavorText" style={style.flavText}>
            {species.flavor_text_entries &&
              species.flavor_text_entries
                .find(checkEng)
                .flavor_text.replace(flavRegex, " ")}
          </p>
        </Fragment>
      )}

      <Buttons
        getRandomPokemon={getRandomPokemon}
        getRandomOGPokemon={getRandomOGPokemon}
      />
    </div>
  );
};

const style = {
  flavText: {
    background: "white",
    borderRadius: "10px",
    padding: "5px",
    webkitBoxShadow: "0px 0px 5px 0px #000000",
    boxShadow: "0px 0px 5px 0px #000000",
  },
};

export default Pokedex;
