import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.NUMBERS,
	});

	return {
		ready,
		data,
		error,
	};
};

const numbersModel = {
	list: handleList,
};

export default numbersModel;
