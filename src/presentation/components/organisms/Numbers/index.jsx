// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
	const { ready, data, error } = props;

	if (!ready) {
		return (
			<div className={style.placeholder}>
				<div className="container">
					<div className={style.inner}>
						<div className={style.item}>
							<div className={style.icon}></div>
							<div className={style.text}>
								<div className={style.title}></div>
								<div className={style.desc}></div>
							</div>
						</div>
						<div className={style.item}>
							<div className={style.icon}></div>
							<div className={style.text}>
								<div className={style.title}></div>
								<div className={style.desc}></div>
							</div>
						</div>
						<div className={style.item}>
							<div className={style.icon}></div>
							<div className={style.text}>
								<div className={style.title}></div>
								<div className={style.desc}></div>
							</div>
						</div>
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

	return (
		<div className={style.numbers} id="numbers">
			<div className="container">
				<div className={style.list}>
					{data.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<NumbersItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Numbers;
