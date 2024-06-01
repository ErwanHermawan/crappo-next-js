import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// call API Posts
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((resData) => {
				setData(resData);
			});
	}, [url]);

	return {
		data: data,
	};
};

export default useFetch;
