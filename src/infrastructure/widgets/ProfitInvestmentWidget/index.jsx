import { useEffect, useState } from "react";

// -- api
import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- organisms
import ProfitInvestment from "@organisms/ProfitInvestment";

const ProfitInvestmentWidget = () => {
	const [callProfitData, setCallProfitData] = useState(false);
	const [profitData, setProfitData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const calculate = document.getElementById("calculate");
		const startScroll = calculate.offsetTop + calculate.clientHeight / 2;

		if (scrollTop > startScroll && !callProfitData) {
			setCallProfitData(true);
		}
	};

	const handleprofitData = async () => {
		const { data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.PROFIT,
		});
		setProfitData(data.data);
	};

	useEffect(() => {
		if (callProfitData) {
			handleprofitData();
		}
	}, [callProfitData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <ProfitInvestment ready={true} data={profitData} />;
};

export default ProfitInvestmentWidget;
