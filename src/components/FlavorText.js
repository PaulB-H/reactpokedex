import React from "react";

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

function FlavorText(props) {
  return (
    <p id="flavorText" style={style.flavText}>
      {props.species.flavor_text_entries &&
        props.species.flavor_text_entries
          .find(checkEng)
          .flavor_text.replace(flavRegex, " ")}
    </p>
  );
}

export default FlavorText;

const style = {
  flavText: {
    background: "white",
    borderRadius: "10px",
    padding: "5px",
    webkitBoxShadow: "0px 0px 5px 0px #000000",
    boxShadow: "0px 0px 5px 0px #000000",
  },
};
