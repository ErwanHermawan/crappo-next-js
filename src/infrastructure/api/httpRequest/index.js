// --- core
import { useState, useEffect } from "react";

// --- library
import axios from "axios";

// --- httpRequest
const httpRequest = async (param) => {
	let config = { ...param };

	if (param.token) {
		config = {
			...param,
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		};
	}

	return await axios(config)
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			if (error.response !== undefined) {
				return {
					data: null,
					error: {
						status: error.response.status,
						type: error.name,
						message: error.message,
					},
				};
			} else {
				return {
					data: null,
					error: {
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					},
				};
			}
		});
};

// --- RequestComponent
const RequestComponent = (param) => {
	const [ready, setReady] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);

	const handleFetch = async () => {
		const { data: dataResponse, error: errorResponse } = await httpRequest(
			param
		);
		if (errorResponse) {
			setError(errorResponse);
		} else {
			setData(dataResponse);
		}
		setReady(true);
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return {
		ready,
		data,
		error,
	};
};

httpRequest.firstLoad = (param) => {
	return RequestComponent(param);
};

export default httpRequest;
