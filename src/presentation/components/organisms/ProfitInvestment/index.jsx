// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const ProfitInvestment = (props) => {
	const { data } = props;
	return (
		<section className={style.profit}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{data.title}</h2>
							<p className={style.textDesc}>{data.description}</p>
							<Button to={data.button?.to} text={data.button?.text} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfitInvestment;
