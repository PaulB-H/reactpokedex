import React, { useState, useEffect } from "react";
import "../App.css";
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
			<div style={{ display: "flex" }}>
				<button style={style.button} onClick={getRandomPokemon}>
					Random
				</button>
				<button style={style.button} onClick={getRandomOGPokemon}>
					Random <br /> Classic
				</button>
			</div>
			{loading ? (
				<>
					<p>Loading</p>
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
						}}
					/>
					<p>
						{species.flavor_text_entries &&
							species.flavor_text_entries.find(checkEng).flavor_text}
					</p>
				</>
			)}
		</div>
	);
};

const style = {
	button: {
		width: "50%",
		padding: "5px",
		margin: "3px",
	},
};

export default Pokedex;
