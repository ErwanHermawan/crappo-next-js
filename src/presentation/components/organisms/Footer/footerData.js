// -- asset image
import logo from "core/assets/img/logo/crappo-text.svg";
import visa from "core/assets/img/icon/visa.svg";
import mastercard from "core/assets/img/icon/mastercard.svg";
import bitcoin from "core/assets/img/icon/btc.svg";

const footerData = {
	logo: {
		to: "/",
		img: logo,
		alt: "Crappo",
	},
	about: {
		title: "We accept following payment systems",
		payment: [
			{
				to: "visa.com",
				img: visa,
				alt: "visa",
			},
			{
				to: "mastercard.com",
				img: mastercard,
				alt: "mastercard",
			},
			{
				to: "bitcoin.com",
				img: bitcoin,
				alt: "bitcoin",
			},
		],
	},
	menu: [
		{
			title: "Quick Link",
			list: [
				{
					to: "/home",
					text: "Home",
				},
				{
					to: "/products",
					text: "Products",
				},
				{
					to: "/about",
					text: "About",
				},
				{
					to: "/features",
					text: "Features",
				},
				{
					to: "/contact",
					text: "Contact",
				},
			],
		},
		{
			title: "Resources",
			list: [
				{
					to: "/",
					text: "Download Whitepapper",
				},
				{
					to: "/",
					text: "Smart Token",
				},
				{
					to: "/",
					text: "Blockchain Explorer",
				},
				{
					to: "/",
					text: "Crypto API",
				},
				{
					to: "/",
					text: "Interest",
				},
			],
		},
	],
	sosmed: [
		{
			to: "facebook.com",
			icon: "facebook",
		},
		{
			to: "instagram.com",
			icon: "instagram",
		},
		{
			to: "youtube.com",
			icon: "youtube",
		},
		{
			to: "twitter.com",
			icon: "twitter",
		},
		{
			to: "linkedin.com",
			icon: "linkedin",
		},
	],
	copyright: "©2021 CRAPPO. All rights reserved",
};

export default footerData;
