// -- core
import { useState } from "react";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

// -- widgets
// import HeroBannerWidget from "@widgets/HeroBannerWidget";
import NumbersWidget from "@widgets/NumbersWidget";
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- components
import HeroBanner from "@organisms/HeroBanner";

const Home = (props) => {
	const { heroBanner } = props;
	const heroBannerData = JSON.parse(heroBanner.data);
	const heroBannerError = JSON.parse(heroBanner.error);

	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<>
			<Default activeMenu="home">
				<HeroBanner
					ready={true}
					data={heroBannerData}
					error={heroBannerError}
				/>
				<NumbersWidget />
				<WhyCrappoWidget />
				<SubsribeWidget />
			</Default>
		</>
	);
};

export default Home;
