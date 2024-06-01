// //- core
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// -- components
import HeaderWidget from "@widgets/HeaderWidget";
import Footer from "@organisms/Footer";

const Default = (props) => {
	// const { pathname } = useLocation();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);

	return (
		<>
			<HeaderWidget activeMenu={props.activeMenu} />
			<main className="main">{props.children}</main>
			<Footer />
		</>
	);
};

export default Default;
