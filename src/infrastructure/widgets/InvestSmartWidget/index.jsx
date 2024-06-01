// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import InvestSmart from "presentation/component/organisms/InvestSmart";

const InvestSmartWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.INVESTSMART,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <InvestSmart data={data} />;
};

export default InvestSmartWidget;
