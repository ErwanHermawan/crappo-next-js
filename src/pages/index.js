import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- modules
import Home from "@modules/Home";

// -- SSR getStaticProps
const getStaticProps = async () => {
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

	return {
		props: {
			heroBanner: {
				data: JSON.stringify(heroBannerData, null, 0),
				error: JSON.stringify(heroBannerError, null, 0),
			},
			revalidate: 10, //Opsional, ISR: revalidate data at most 10 seconds
		},
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
