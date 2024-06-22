// //- core
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";

const Default = (props) => {
	const { activeMenu, children } = props;
	const { pathname } = usePathname();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<HeaderWidget activeMenu={activeMenu} />
			<main className="main">{children}</main>
			<FooterWidget />
		</>
	);
};

export default Default;
