import { useEffect, useState } from "react";

// -- api
import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- organisms
import InvestSmart from "@organisms/InvestSmart";

const InvestSmartWidget = () => {
	const [callMarketData, setCallMarketData] = useState(false);
	const [marketData, setMarketData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const heroBanner = document.getElementById("heroBanner");
		const startScroll = heroBanner.offsetTop + heroBanner.clientHeight / 2;

		if (scrollTop > startScroll && !callMarketData) {
			setCallMarketData(true);
		}
	};

	const handleMarketData = async () => {
		const { data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.INVESTSMART,
		});
		setMarketData(data.data);
	};

	useEffect(() => {
		if (callMarketData) {
			handleMarketData();
		}
	}, [callMarketData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <InvestSmart ready={true} data={marketData} />;
};

export default InvestSmartWidget;
