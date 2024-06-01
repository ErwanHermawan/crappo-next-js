// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const InvestSmart = (props) => {
	const { ready, data, error } = props;

	if (!ready) {
		return (
			<div className="container">
				<p className="">Sedang dimuat</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container">
				<h2>{props.error.message}</h2>
			</div>
		);
	}

	return (
		<div className={style.invest}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{data?.title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
						<img
							className={style.imgMain}
							src={data?.section.images[0]}
							alt={data?.section.title}
						/>
						<img
							className={style.imgInc}
							src={data?.section.images[1]}
							alt={data?.section.title}
						/>
						<img
							className={style.imgPrice}
							src={data?.section.images[2]}
							alt={data?.section.title}
						/>
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{data?.section.title}</h2>
							<p className={style.textDesc}>{data?.section.description}</p>
							<Button
								to={data?.section.button.to}
								text={data?.section.button.text}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestSmart;
