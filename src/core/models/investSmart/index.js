import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.INVESTSMART,
	});

	return {
		ready,
		data,
		error,
	};
};

const investSmartModel = {
	list: handleList,
};

export default investSmartModel;
