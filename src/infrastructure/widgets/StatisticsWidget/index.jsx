import { useEffect, useState } from "react";

// -- api
import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- organisms
import Statistics from "@organisms/Statistics";

const WhyCrappoWidget = () => {
	const [callStatisticsData, setCallStatisticsData] = useState(false);
	const [statisticsData, setStatisticsData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const numbers = document.getElementById("numbers");
		const startScroll = numbers.offsetTop + numbers.clientHeight / 2;

		if (scrollTop > startScroll && !callStatisticsData) {
			setCallStatisticsData(true);
		}
	};

	const handleStatisticsData = async () => {
		const { data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.STATISTICS,
		});
		setStatisticsData(data.data);
	};

	useEffect(() => {
		if (callStatisticsData) {
			handleStatisticsData();
		}
	}, [callStatisticsData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <Statistics ready={true} data={statisticsData} />;
};

export default WhyCrappoWidget;
