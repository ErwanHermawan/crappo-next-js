// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- states
import useStateHeader from "core/states/header";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const Header = (props) => {
	const { ready, data } = props;
	const { menu } = useStateHeader();

	// data is loading
	if (!ready) {
		<div className="container">
			<h5>data sedang dimuat</h5>
		</div>;
	}

	// show navigation menu
	const [showNavigation, setShowNavigation] = useState(false);
	const handleToggleNavigation = () => {
		setShowNavigation(!showNavigation);
	};

	// if (showNavigation) {
	// 	document.querySelector("body").classList.add("show-menu");
	// } else {
	// 	document.querySelector("body").classList.remove("show-menu");
	// }

	// Sticky Menu Area
	const ref = useRef(null);
	const [height, setHeight] = useState(0);

	// use layout effect
	useEffect(() => {
		setHeight(ref.current.offsetHeight);
	}, []);

	// on render, set listener
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
		// eslint-disable-next-line
	}, []);

	let _lastScrollTop = 0;
	let _delta = 0;
	let _headerHeight = height / 2;
	// sticky header
	const isSticky = () => {
		const _scrollTop = window.scrollY;

		if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
			return;
		}

		// --- Scroll Down
		if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
			document.querySelector("body").classList.add("scroll-down");
		} else {
			// --- Scroll Up
			if (_scrollTop + window.screen.height < document.body.clientHeight) {
				document.querySelector("body").classList.remove("scroll-down");
				if (_scrollTop > _headerHeight) {
					document.querySelector("body").classList.add("header-on-scroll");
				} else {
					document.querySelector("body").classList.remove("header-on-scroll");
				}
			}
		}

		_lastScrollTop = _scrollTop;
	};

	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.inner} ref={ref}>
					{/* Logo */}
					<div className={style.logo}>
						<Link
							href={data?.brand?.to !== undefined ? data?.brand?.to : "/"}
							className={style.logoLink}
						>
							<img
								src={data?.brand?.logo}
								alt={data?.brand?.name}
								className={style.logoImg}
								height={40}
								width={132}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.nav}>
						<div className={style.menu}>
							<ul className={style.list}>
								{data?.main_menu?.map((val, idx) => (
									<li className={style.item} key={`hm-${idx}`}>
										<Link
											href={val.to}
											className={
												menu === val.text.toLowerCase()
													? `${style.link} ${style.active}`
													: style.link
											}
										>
											{val.text}
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* button */}
						<div className={style.btn}>
							{data?.auth_menu?.map((vB, iB) => (
								<Button key={`hm-${iB}`} href={vB.to} text={vB.text} />
							))}
						</div>
						{/* burger menu */}
						<button
							type="button"
							className={style.burgerMenu}
							onClick={handleToggleNavigation}
						>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
