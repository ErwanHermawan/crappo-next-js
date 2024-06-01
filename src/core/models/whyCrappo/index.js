import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});

	return {
		ready,
		data,
		error,
	};
};

const whyCrappoModel = {
	list: handleList,
};

export default whyCrappoModel;
