// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const WhyCrappo = (props) => {
	const { ready, data, error } = props;

	if (!ready) {
		return (
			<div className={style.placeholder}>
				<div className="container">
					<div className={style.inner}>
						<div className={style.img}></div>
						<div className={style.text}>
							<div className={style.title}>
								<div className={style.titleBar}></div>
							</div>
							<div className={style.desc}>
								<div className={style.descBar}></div>
								<div className={style.descBar}></div>
								<div className={style.descBar}></div>
							</div>
							<div className={style.button}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={style.crappo}>
			<div className={"container"}>
				<div className={style.inner}>
					<div className={style.image}>
						<img src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{data.title}</h2>
						<p className={style.description}>{data.description}</p>
						<Button to={data.button?.to} text={data.button?.text} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyCrappo;
