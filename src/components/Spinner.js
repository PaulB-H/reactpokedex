import React from "react";
import spinner from "../images/spinner.gif";

function Spinner() {
  return (
    <>
      <img id="spinnerImg" src={spinner} style={style.spinnerImg} alt="" />
    </>
  );
}

export default Spinner;

const style = {
  spinnerImg: {
    margin: "60px",
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  },
};
