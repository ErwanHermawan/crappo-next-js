// --core
import { useState } from "react";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import HeroBannerWidget from "@widgets/HeroBannerWidget";

const Products = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("products");
	}, []);

	return (
		<>
			<Default>
				<HeroBannerWidget />
			</Default>
		</>
	);
};

export default Products;
