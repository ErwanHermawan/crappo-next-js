// -- models
import headerModel from "@models/header";

// -- organisms
import Header from "@organisms/Header";

const HeaderWidget = (props) => {
	const { ready, data, error } = headerModel.list();

	return <Header ready={ready} data={data?.data} error={error} />;
};

export default HeaderWidget;
