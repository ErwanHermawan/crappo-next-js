// -- react
import { useState, useEffect } from "react";
import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- molecule
import HeroBannerItem from "@molecules/HeroBannerItem";

const HeroBanner = (props) => {
	const { ready, data, error } = props;

	const [showSingle, setShowSingle] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: false,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	let className = style.banner;

	// data is loading
	if (!ready) {
		return (
			<div className={style.placeholder}>
				<div className="container">
					<div className={style.inner}>
						<div className={style.text}>
							<div className={style.label}></div>
							<div className={style.title}>
								<div className={style.titleBar}></div>
								<div className={style.titleBar}></div>
								<div className={style.titleBar}></div>
							</div>
							<div className={style.desc}></div>
							<div className={style.button}></div>
						</div>
						<div className={style.img}></div>
					</div>
				</div>
			</div>
		);
	}

	// data is error
	if (error) {
		return (
			<div className={style.error}>
				<div className="container">
					<h4 className={style.code}>{error.status}</h4>
					<h4 className={style.message}>{error.message}</h4>
				</div>
			</div>
		);
	}

	// set single banner
	if (ready && error !== null) {
		if (data.data.length === 1) {
			if (showSingle) {
				className += " banner-single";
			}
		}
	}

	return (
		<div className={className}>
			{data.data.length === 1 ? (
				data.data.map((val, idx) => {
					return (
						<div className={style.item} key={`hb-${idx}`}>
							<div className={style.middleAlign}>
								<div className="container">
									<HeroBannerItem {...val} />
								</div>
							</div>
						</div>
					);
				})
			) : (
				<Slider {...settings}>
					{showSingle &&
						data.data.map((val, idx) => {
							return (
								<div className={style.item} key={`hb-${idx}`}>
									<div className={style.middleAlign}>
										<div className="container">
											<HeroBannerItem {...val} />
										</div>
									</div>
								</div>
							);
						})}
				</Slider>
			)}
		</div>
	);
};

export default HeroBanner;
