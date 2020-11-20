import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../logo.svg";
import spinner from "./spinner.gif";
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
			<img
				src={logo}
				style={{ maxWidth: "100%", margin: "-40%" }}
				alt="Pokemon Logo"
			/>
			{loading ? (
				<>
					<img
						src={spinner}
						style={{
							margin: "75px",
						}}
						alt=""
					/>
				</>
			) : (
				<>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "white",
							borderRadius: "10px",
							padding: "10px",
						}}
					>
						<h1
							style={{
								fontFamily: "Luckiest Guy",
								color: "#1d4694",
								webkitTextStroke: "2px #fbc707",
							}}
						>
							{pokemon.name && pokemon.name.toUpperCase()}
						</h1>
					</div>
					<div style={{ position: "relative", textAlign: "center" }}>
						<img
							id="pkmnImg"
							src={
								pokemon.sprites
									? pokemon.sprites.other["official-artwork"].front_default
										? pokemon.sprites.other["official-artwork"].front_default
										: pokemon.sprites.front_default
									: ""
							}
							alt={pokemon.name && `Image for ${pokemon.name.toUpperCase()}`}
						/>
						<div
							style={{
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
							}}
						></div>
					</div>
					<p id="flavorText">
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
		background: "#fbc707",
		fontWeight: "bolder",
		color: "#1d4694",
	},
};

export default Pokedex;
