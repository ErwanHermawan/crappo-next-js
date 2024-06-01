import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
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
