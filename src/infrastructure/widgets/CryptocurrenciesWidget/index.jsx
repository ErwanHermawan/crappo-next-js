// -- model
import cryptoCurrenciesModel from "@models/cryptoCurrencies";

// -- organisms
import Cryptocurrencies from "@organisms/Cryptocurrencies";

const CryptocurrenciesWidget = () => {
	const { ready, data, error } = cryptoCurrenciesModel.list();

	return <Cryptocurrencies ready={ready} data={data?.data} error={error} />;
};

export default CryptocurrenciesWidget;
