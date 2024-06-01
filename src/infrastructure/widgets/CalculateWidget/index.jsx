// -- model
import calculateModel from "@models/calculate";

// -- organisms
import Calculate from "@organisms/Calculate";

const CalculateWidget = () => {
	const { ready, data, error } = calculateModel.list();

	return <Calculate ready={ready} data={data?.data} error={error} />;
};

export default CalculateWidget;
