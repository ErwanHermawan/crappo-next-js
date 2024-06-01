// -- style
import style from "./style.module.scss";

const NumbersItem = (props) => {
	return (
		<div className={style.item}>
			<div className={style.icon}>
				<i className={`ci-${props.icon_font}`}></i>
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.description}</p>
			</div>
		</div>
	);
};

export default NumbersItem;
