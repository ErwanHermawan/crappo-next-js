// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
	if (!props.ready) {
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
	if (props.error) {
		return (
			<div className={style.error}>
				<div className="container">
					<h4 className={style.code}>{props.error.status}</h4>
					<h4 className={style.message}>{props.error.message}</h4>
				</div>
			</div>
		);
	}

	return (
		<div className={style.numbers}>
			<div className="container">
				<div className={style.list}>
					{props.data.map((val, idx) => {
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
