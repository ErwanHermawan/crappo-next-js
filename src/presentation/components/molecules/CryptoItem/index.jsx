// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const CryptoItem = (props) => {
	return (
		<div className={style.box}>
			<div className={style.image}>
				<img src={props.icon} alt={props.name} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{props.name}
					<span className={style.code}>{props.code}</span>
				</h3>
				<p className={style.desc}>{props.description}</p>
				<div className={style.btn}>
					<Button
						to={props.button.to}
						text={props.button.text}
						variant="rounded"
						icon="chevron-right"
					/>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
