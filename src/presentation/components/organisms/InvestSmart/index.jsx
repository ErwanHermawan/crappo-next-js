// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const InvestSmart = (props) => {
	const {
		data: { title, section },
	} = props;

	return (
		<div className={style.invest}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
						<img
							className={style.imgMain}
							src={section?.images[0]}
							alt={section?.title}
						/>
						<img
							className={style.imgInc}
							src={section?.images[1]}
							alt={section?.title}
						/>
						<img
							className={style.imgPrice}
							src={section?.images[2]}
							alt={section?.title}
						/>
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{section?.title}</h2>
							<p className={style.textDesc}>{section?.description}</p>
							<Button to={section?.button.to} text={section?.button.text} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestSmart;
