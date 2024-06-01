// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const HeroBannerItem = (props) => {
	// const { image, label, title, description, button } = props;
	return (
		<div className={style.banner}>
			<div className={style.img}>
				<img src={props.img} alt={props.title} />
			</div>
			<div className={style.text}>
				<div className={style.sale}>
					<p className={style.saleTitle}>{props.sale.title}</p>
					<p className={style.saleDesc}>{props.sale.desc}</p>
				</div>
				<h2 className={style.title}>{props.title}</h2>
				<p className={style.desc}>{props.desc}</p>
				<div className={style.btn}>
					<Button
						to={props.btn.to}
						text={props.btn.text}
						variant="icon"
						icon="chevron-right"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
