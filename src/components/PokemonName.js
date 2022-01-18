import React from "react";

function PokemonName(props) {
  return (
    <div style={style.pkmnNameWrap}>
      <h1 style={style.pkmnName}>
        {props.pokemonName && props.pokemonName.toUpperCase()}
      </h1>
    </div>
  );
}

export default PokemonName;

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
};
