import React from "react";
import { useFetch } from "./hooks";
import { useFetch2 } from "./hooks2";
import "../App.css";

function Pokemon() {
	let rand = Math.ceil(Math.random() * 400);
	const [data, loadingImg] = useFetch(rand);
	const [data2, loadingFlav] = useFetch2(rand);

	return (
		<div id="container">
			{loadingImg ? (
				<>
					"Loading image..." <br />
				</>
			) : (
				<>
					<h3>{data.name.toUpperCase()}</h3>
					<img
						src={
							data.sprites.other["official-artwork"].front_default
								? data.sprites.other["official-artwork"].front_default
								: data.sprites.front_default
						}
						alt={""}
						style={{
							maxWidth: "100%",
						}}
					/>
				</>
			)}
			{loadingFlav ? (
				"Loading flavor text..."
			) : (
				<p>{data2.flavor_text_entries[0].flavor_text}</p>
			)}
		</div>
	);
}
export default Pokemon;
