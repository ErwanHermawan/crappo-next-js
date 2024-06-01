import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- modules
import Home from "@modules/Home";

// -- SSR getStaticProps
const getStaticProps = async () => {
	// header
	const { data: headerData, error: headerError } = await httpRequest({
		method: "get",
		url: ENDPOINT.HEADER,
	});

	// banner
	const { data: heroBannerData, error: heroBannerError } = await httpRequest({
		method: "get",
		url: ENDPOINT.HERO_BANNER,
		transformResponse: [
			(data) => {
				const respo = JSON.parse(data);
				const transformData = respo.data.map((val) => ({
					img: val.image,
					title: val.title,
					sale: {
						title: val.label.badge,
						desc: val.label.description,
					},
					desc: val.description,
					btn: {
						to: val.button.to,
						text: val.button.text,
					},
				}));

				return {
					...respo,
					data: transformData,
				};
			},
		],
	});

	// numbers
	const { data: numbersData, error: numbersError } = await httpRequest({
		method: "get",
		url: ENDPOINT.NUMBERS,
	});

	// why crappo
	const { data: whyCrappoData, error: whyCrappoError } = await httpRequest({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});

	return {
		props: {
			header: {
				data: JSON.stringify(headerData, null, 2),
				error: JSON.stringify(headerError, null, 2),
			},
			heroBanner: {
				data: JSON.stringify(heroBannerData, null, 2),
				error: JSON.stringify(heroBannerError, null, 2),
			},
			numbers: {
				data: JSON.stringify(numbersData, null, 2),
				error: JSON.stringify(numbersError, null, 2),
			},
			whyCrappo: {
				data: JSON.stringify(whyCrappoData, null, 2),
				error: JSON.stringify(whyCrappoError, null, 2),
			},
		},
		revalidate: 10, //Opsional, ISR: revalidate data at most 10 seconds
	};
};

const HomePage = (props) => {
	return (
		<>
			<Home {...props} />
		</>
	);
};

export { getStaticProps };
export default HomePage;
