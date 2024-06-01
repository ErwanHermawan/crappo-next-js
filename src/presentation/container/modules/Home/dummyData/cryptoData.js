// -- asset image
import bitcoin from "core/assets/img/icon/bitcoin.svg";
import ethereum from "core/assets/img/icon/ethereum.svg";
import litecoin from "core/assets/img/icon/litecoin.svg";

const cryptoData = {
	title: "Trade securely and market the high growth cryptocurrencies.",
	list: [
		{
			to: "/bitcoin",
			img: bitcoin,
			title: "Bitcoin",
			subtitle: "BTC",
			desc: "Digital currency in which a record of transactions is maintained.",
		},
		{
			to: "/ethereum",
			img: ethereum,
			title: "Ethereum",
			subtitle: "ETH",
			desc: "Blockchain technology to create and run decentralized digital applications.",
		},
		{
			to: "/litecoin",
			img: litecoin,
			title: "Litecoin",
			subtitle: "LTC",
			desc: "Cryptocurrency that enables instant payments to anyone in the world.",
		},
	],
};

export default cryptoData;
