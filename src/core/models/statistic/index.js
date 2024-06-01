import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.STATISTICS,
	});

	return {
		ready,
		data,
		error,
	};
};

const statisticModel = {
	list: handleList,
};

export default statisticModel;
