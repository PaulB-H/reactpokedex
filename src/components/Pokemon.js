// Photos.js
import React from "react";
import { useFetch } from "./hooks";

import { useFetch2 } from "./hooks2";

function Pokemon() {
	let rand = Math.ceil(Math.random() * 150);
	const [data, loading] = useFetch(rand);
	const [data2, loading2] = useFetch2(rand);

	return (
		<>
			{loading ? (
				<>
					"Loading image..." <br />
				</>
			) : (
				<>
					<h3>{data.name.toUpperCase()}</h3>
					<img
						src={
							data.sprites.other["official-artwork"].front_default
								? data.sprites.other["official-artwork"]
										.front_default
								: data.sprites.front_default
						}
						alt={""}
						style={{
							maxWidth: "100%",
						}}
					/>
				</>
			)}
			{loading2 ? (
				"Loading flavor text..."
			) : (
				// <>
				// 	<h3>{data.name.toUpperCase()}</h3>
				// 	<img
				// 		src={
				// 			data.sprites.other["official-artwork"].front_default
				// 				? data.sprites.other["official-artwork"]
				// 						.front_default
				// 				: data.sprites.front_default
				// 		}
				// 		alt={""}
				// 		style={{
				// 			maxWidth: "100%",
				// 		}}
				// 	/>
				// </>

				<>
					{/* <h3>{data2.names[8].name}</h3> */}
					<p>
						{
							data2.flavor_text_entries[3].flavor_text

							// data2.flavor_text_entries.forEach(function (
							// 	value,
							// 	index
							// ) {
							// 	if (value.language.name === "en") {
							// 		arr.push[value.flavor_text];
							// 	}
							// })
						}
					</p>
				</>
			)}
		</>
	);
}
export default Pokemon;
