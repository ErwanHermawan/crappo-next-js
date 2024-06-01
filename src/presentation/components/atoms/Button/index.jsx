// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const Button = (props) => {
	const { href, text, type, icon, variant = "primary", ...otherProps } = props;

	let variantStyle = style.btn;
	switch (variant) {
		case "rounded":
			variantStyle += " " + style.btnRounded;
			break;
		case "icon":
			variantStyle += " " + style.btnIcon;
			break;
		case "white":
			variantStyle += " " + style.btnIcon;
			break;
		default:
			variantStyle += " " + style.btnPrimary;
	}

	return (
		<>
			{href && (
				<Link {...otherProps} href={href} className={variantStyle}>
					{text}
					{icon && <i className={`ci-${icon}`}></i>}
				</Link>
			)}
			{!href && (
				<button {...otherProps} type={type} className={variantStyle}>
					{text}
					{icon && <i className={`ci-${icon}`}></i>}
				</button>
			)}
		</>
	);
};

export default Button;
