import React from "react";

function Header(props) {
  return (
    <>
      <img src={props.logo} style={{ maxWidth: "100%" }} alt="Pokemon Logo" />
    </>
  );
}

export default Header;
