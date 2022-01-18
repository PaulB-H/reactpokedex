function Buttons(props) {
  return (
    <div style={style.btnWrap}>
      <button style={style.button} onClick={props.getRandomPokemon}>
        Random
      </button>

      <button style={style.button} onClick={props.getRandomOGPokemon}>
        Random <br /> Classic
      </button>
    </div>
  );
}

export default Buttons;

const style = {
  btnWrap: {
    display: "flex",
    marginTop: "10px",
    width: "100%",
  },
  button: {
    width: "50%",
    padding: "5px",
    margin: "3px",
    borderRadius: "5px",
    border: "none",
    webkitBoxShadow: "0px 0px 5px 0px #000000",
    boxShadow: "0px 0px 1px 0px #000000",
    background: "#fbc707",
    fontWeight: "bolder",
    color: "#1d4694",
  },
};
