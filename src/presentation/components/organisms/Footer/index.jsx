// -- react
import { useState, useEffect } from "react";
import Link from "next/link";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- states
import useStateSubscribe from "@states/subscribe";

// -- style
import style from "./style.module.scss";

const Footer = () => {
	// state
	const { total } = useStateSubscribe();

	const [data, setData] = useState({
		brand: [],
		menu: [],
		payments: {
			list: [],
		},
		social_media: [],
		copyright: "",
	});

	// call API
	const { data: getData } = httpRequest.firstLoad({
		url: ENDPOINT.FOOTER,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	const { brand, menu, payments, social_media, copyright } = data;

	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					{/* Logo */}
					<div className={style.logo}>
						<Link
							href={brand.to !== undefined ? brand.to : "/"}
							className={style.logoLink}
						>
							<img
								src={brand.logo}
								alt={brand.name}
								className={style.logoImg}
							/>
						</Link>
						<h3>{total}</h3>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{menu.map((val, idx) => (
							<div className={`${style.column}`} key={`fc-${idx}`}>
								<h3 className={style.title}>{val.title}</h3>
								<ul className={style.list}>
									{val.list.map((vL, idx) => {
										return (
											<li className={style.item} key={`fi-${idx}`}>
												<Link className={style.link} href={vL.to}>
													{vL.text}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						))}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>{payments.title}</h2>
							<ul className={style.paymentList}>
								{payments.list.map((val, idx) => (
									<li className={style.paymentItem} key={`fp-${idx}`}>
										<a
											href={val.to}
											className={style.paymentLink}
											target="blank"
										>
											<img
												className={style.paymentImg}
												src={val.icon}
												alt={val.name}
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={style.bottom}>
					<p className={style.copyright}>{copyright}</p>
					<ul className={style.sosmed}>
						{social_media.map((val, idx) => (
							<li className={style.sosmedItem} key={`fs-${idx}`}>
								<Link
									href={val.to}
									className={`${style.sosmedLink} ${val.name}`}
								>
									<i className={`ci-${val.icon}`}></i>
									<img
										className={style.paymentIcon}
										src={val.icon}
										alt={val.name}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
