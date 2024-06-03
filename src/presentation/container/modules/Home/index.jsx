// -- core
import { useState } from "react";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import CalculateWidget from "@widgets/CalculateWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";
import CryptocurrenciesWidget from "@widgets/CryptocurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
import StatisticsWidget from "@widgets/StatisticsWidget";
import ProfitInvestmentWidget from "@widgets/ProfitInvestmentWidget";

// -- components
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";
import WhyCrappo from "@organisms/WhyCrappo";

const Home = (props) => {
	const { heroBanner, numbers, whyCrappo } = props;

	// parsing data
	const heroBannerData = JSON.parse(heroBanner.data);
	const heroBannerError = JSON.parse(heroBanner.error);
	const numbersData = JSON.parse(numbers.data);
	const numbersError = JSON.parse(numbers.error);
	const whyCrappoData = JSON.parse(whyCrappo.data);
	const whyCrappoError = JSON.parse(whyCrappo.error);

	// set active header hemu
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<>
			<Default activeMenu="home">
				{/* SSR */}
				<HeroBanner
					ready={true}
					data={heroBannerData?.data}
					error={heroBannerError}
				/>
				<Numbers ready={true} data={numbersData?.data} error={numbersError} />
				<WhyCrappo
					ready={true}
					data={whyCrappoData?.data}
					error={whyCrappoError}
				/>
				{/* CSR */}
				<CalculateWidget />
				<CryptocurrenciesWidget />
				{/* Event Call */}
				<InvestSmartWidget />
				<StatisticsWidget />
				<ProfitInvestmentWidget />

				<SubsribeWidget />
			</Default>
		</>
	);
};

export default Home;
