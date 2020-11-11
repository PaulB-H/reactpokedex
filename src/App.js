import React, { useState, useEffect } from "react";
import "./App.css";

// Docs
// https://pokeapi.co/docs/v2#pokemon
// https://reactjs.org/docs/faq-ajax.html

function App() {
	// console.clear();

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		let query = Math.ceil(Math.random() * 150);
		fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<img
					// src={items.sprites.front_default}
					style={{ height: "50%", width: "50%" }}
					alt={""}
				/>
				<h1>{items.name}</h1>
				{/* <button
					style={{
						width: "200px",
					}}
					onClick={handleClick}
				>
					<h1>Random Pokemon</h1>
				</button> */}
			</div>
		);
	}
}

export default App;
