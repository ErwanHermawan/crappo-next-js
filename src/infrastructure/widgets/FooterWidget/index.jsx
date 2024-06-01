// -- models
import footerModel from "@models/footer";

// -- organisms
import Footer from "@organisms/Footer";

const FooterWidget = (props) => {
	const { ready, data, error } = footerModel.list();

	return <Footer ready={ready} data={data?.data} error={error} />;
};

export default FooterWidget;
