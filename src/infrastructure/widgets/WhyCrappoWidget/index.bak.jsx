// -- model
import whyCrappoModel from "core/models/whyCrappo";

// -- organisms
import WhyCrappo from "@organisms/WhyCrappo";
import { useEffect, useState } from "react";

const WhyCrappoWidget = () => {
	const [showComponent, setShowComponent] = useState(false);
	const [data, setData] = useState({
		ready: false,
		data: null,
		error: null,
	});

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		if (scrollTop > 400) {
			const {
				ready: wReady,
				data: wData,
				error: wError,
			} = whyCrappoModel.list();
			setData({
				ready: wReady,
				data: wData,
				error: wError,
			});
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{showComponent && (
				<WhyCrappo ready={ready} data={data?.data} error={error} />
			)}
		</>
	);
	// return <WhyCrappo ready={ready} data={data?.data} error={error} />;
};

export default WhyCrappoWidget;
