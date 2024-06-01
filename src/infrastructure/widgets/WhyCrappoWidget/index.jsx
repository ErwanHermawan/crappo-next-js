// -- model
import whyCrappoModel from "core/models/whyCrappo";

// -- organisms
import WhyCrappo from "@organisms/WhyCrappo";

const WhyCrappoWidget = () => {
	const { ready, data, error } = whyCrappoModel.list();

	return <WhyCrappo ready={ready} data={data?.data} error={error} />;
};

export default WhyCrappoWidget;
