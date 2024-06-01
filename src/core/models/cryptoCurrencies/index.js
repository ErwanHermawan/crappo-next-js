import httpRequest from "infrastucture/api/httpRequest";
import ENDPOINT from "infrastucture/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.CRYPTOCURRENCIES,
	});

	return {
		ready,
		data,
		error,
	};
};

const cryptoCurrenciesModel = {
	list: handleList,
};

export default cryptoCurrenciesModel;
