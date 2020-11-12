import { useState, useEffect } from "react";

function useFetch(rand) {
	let url = `https://pokeapi.co/api/v2/pokemon/${rand}/`;

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchUrl() {
		const response = await fetch(url);
		const json = await response.json();
		setData(json);
		setLoading(false);
	}

	useEffect(() => {
		fetchUrl();
	}, []);

	return [data, loading];
}
export { useFetch };
