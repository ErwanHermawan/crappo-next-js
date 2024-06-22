import { useEffect, useState } from "react";

const WindowResize = () => {
	const [resizeTimeout, setResizeTimeout] = useState(null);
	const delta = 200;

	useEffect(() => {
		const handleResize = () => {
			document.body.classList.add("hold-transition");
			if (resizeTimeout) clearTimeout(resizeTimeout);

			setResizeTimeout(
				setTimeout(() => {
					handleResizeEnd();
				}, delta)
			);
		};

		const handleResizeEnd = () => {
			document.body.classList.remove("hold-transition");
			// Run Function on Resize end
		};

		window.addEventListener("resize", handleResize);

		// Cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
			if (resizeTimeout) clearTimeout(resizeTimeout);
		};
	}, [resizeTimeout]);

	return null; // This component does not render anything
};

export default WindowResize;
