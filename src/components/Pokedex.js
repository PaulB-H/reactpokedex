import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../logo.svg";
const axios = require("axios");

const Pokedex = () => {
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

	function checkEng(entry) {
		if (entry.language.name === "en") {
			return entry.flavor_text;
		}
	}

	return (
		<div id="container">
			<img src={logo} style={{ maxWidth: "100%", margin: "-40%" }} />
			{loading ? (
				<>
					<p style={{ margin: "155px" }}>Loading</p>
				</>
			) : (
				<>
					<p>
						Name:&nbsp;
						{pokemon.name && pokemon.name.toUpperCase()}
					</p>
					<img
						src={
							pokemon.sprites
								? pokemon.sprites.other["official-artwork"].front_default
									? pokemon.sprites.other["official-artwork"].front_default
									: pokemon.sprites.front_default
								: ""
						}
						alt={pokemon.name && `Image for ${pokemon.name.toUpperCase()}`}
						style={{
							maxWidth: "100%",
							minHeight: "250px",
						}}
					/>
					<p>
						{species.flavor_text_entries &&
							species.flavor_text_entries.find(checkEng).flavor_text}
					</p>
				</>
			)}
			<div style={{ display: "flex", marginTop: "10px", width: "100%" }}>
				<button style={style.button} onClick={getRandomPokemon}>
					Random
				</button>
				<button style={style.button} onClick={getRandomOGPokemon}>
					Random <br /> Classic
				</button>
			</div>
		</div>
	);
};

const style = {
	button: {
		width: "50%",
		padding: "5px",
		margin: "3px",
		borderRadius: "5px",
		border: "none",
		webkitBoxShadow: "0px 0px 5px 0px #000000",
		boxShadow: "0px 0px 1px 0px #000000",
	},
};

export default Pokedex;
