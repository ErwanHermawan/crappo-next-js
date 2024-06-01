import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.HEADER,
	});

	return {
		ready,
		data,
		error,
	};
};

const headerModel = {
	list: handleList,
};

export default headerModel;
