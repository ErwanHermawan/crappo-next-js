import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.CALCULATE,
	});

	return {
		ready,
		data,
		error,
	};
};

const calculateModel = {
	list: handleList,
};

export default calculateModel;
