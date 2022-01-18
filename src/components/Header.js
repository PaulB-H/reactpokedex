import React from "react";
import logo from "../images/pokemonlogo.png";

function Header(props) {
  return (
    <>
      <img src={logo} style={{ maxWidth: "100%" }} alt="Pokemon Logo" />
    </>
  );
}

export default Header;
