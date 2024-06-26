import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.PROFIT,
	});

	return {
		ready,
		data,
		error,
	};
};

const profitInvestmentModel = {
	list: handleList,
};

export default profitInvestmentModel;
