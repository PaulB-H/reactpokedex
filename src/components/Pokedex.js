import React, { useState, useEffect, Fragment } from "react";
import "../App.css";
import logo from "../images/pokemonlogo.png";

import Buttons from "./Buttons";
import Header from "./Header";
import Spinner from "./Spinner";

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

  const props = { getRandomPokemon, getRandomOGPokemon };

  // Regex pattern to find any metachars
  // such as /n which are in some flav text entries
  const flavRegex = /\\./gi;

  return (
    <div id="container">
      <Header logo={logo} />

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div style={style.pkmnNameWrap}>
            <h1 style={style.pkmnName}>
              {pokemon.name && pokemon.name.toUpperCase()}
            </h1>
          </div>

          <div style={style.imgWrap}>
            <img
              id="pkmnImg"
              style={style.pkmnImg}
              src={
                pokemon.sprites
                  ? pokemon.sprites.other["official-artwork"].front_default
                    ? pokemon.sprites.other["official-artwork"].front_default
                    : pokemon.sprites.front_default
                  : ""
              }
              alt={pokemon.name && `Image for ${pokemon.name.toUpperCase()}`}
            />

            <div style={style.backgroundStar}></div>
          </div>

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
  pkmnNameWrap: {
    backgroundColor: "white",
    borderRadius: "10px",
    textAlign: "center",
    webkitBoxShadow: "0px 0px 5px 0px #000000",
    boxShadow: "0px 0px 5px 0px #000000",
    padding: "8px",
  },
  pkmnName: {
    fontFamily: "Luckiest Guy",
    color: "#1d4694",
    webkitTextStroke: "2px #fbc707",
    borderRadius: "10px",
  },
  imgWrap: {
    position: "relative",
    textAlign: "center",
  },
  pkmnImg: {
    maxWidth: "250px",
    minHeight: "250px",
  },
  flavText: {
    background: "white",
    borderRadius: "10px",
    padding: "5px",
    webkitBoxShadow: "0px 0px 5px 0px #000000",
    boxShadow: "0px 0px 5px 0px #000000",
  },
  backgroundStar: {
    position: "absolute",
    width: "150%",
    height: "150%",
    borderRadius: "50%",
    background: "white",
    top: "-25%",
    right: "-25%",
    zIndex: "-1",
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  },
};

export default Pokedex;
