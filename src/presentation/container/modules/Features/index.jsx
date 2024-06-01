// --core
import { useState } from "react";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import HeroBannerWidget from "@widgets/HeroBannerWidget";

const Features = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("features");
	}, []);

	return (
		<>
			<Default>
				<HeroBannerWidget />
			</Default>
		</>
	);
};

export default Features;
