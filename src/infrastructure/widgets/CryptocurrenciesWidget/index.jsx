// -- model
import cryptoCurrenciesModel from "core/models/cryptoCurrencies";

// -- organisms
import Cryptocurrencies from "presentation/component/organisms/Cryptocurrencies";

const CryptocurrenciesWidget = () => {
	const { ready, data, error } = cryptoCurrenciesModel.list();

	return <Cryptocurrencies ready={ready} data={data?.data} error={error} />;
};

export default CryptocurrenciesWidget;
