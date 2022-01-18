import React from "react";

function PokemonImg(props) {
  return (
    <div style={style.imgWrap}>
      <img
        id="pkmnImg"
        style={style.pkmnImg}
        src={
          props.sprite
            ? props.sprite.other["official-artwork"].front_default
              ? props.sprite.other["official-artwork"].front_default
              : props.sprite.front_default
            : ""
        }
        alt={
          props.pokemonName && `Image for ${props.pokemonName.toUpperCase()}`
        }
      />

      <div style={style.backgroundStar}></div>
    </div>
  );
}

export default PokemonImg;

const style = {
  imgWrap: {
    position: "relative",
    textAlign: "center",
  },
  pkmnImg: {
    maxWidth: "250px",
    minHeight: "250px",
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
