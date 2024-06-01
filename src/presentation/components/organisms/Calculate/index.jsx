// -- style
import FormControl from "presentation/component/atoms/FormControl";
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Calculate = (props) => {
	if (!props.ready) {
		return (
			<section className="sc-placeholder">
				<div className="container">
					<h2>Data sedang dimuat!</h2>
				</div>
			</section>
		);
	}

	if (props.error !== null) {
		return <h2>{props.error.message}</h2>;
	}

	const optionData = [
		{
			value: "TH/s",
			text: "TH/s",
		},
		{
			value: "TH/m",
			text: "TH/m",
		},
		{
			value: "TH/h",
			text: "TH/h",
		},
		{
			value: "TH/mm",
			text: "TH/mm",
		},
	];
	return (
		<div className={style.calculate}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>Check how much you can earn</h2>
					<p className={style.desc}>
						Let’s check your hash rate to see how much you will earn today,
						Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>
				<div className={style.box}>
					<div className={style.form}>
						<div className={style.row}>
							<FormControl
								type="text"
								name="rate"
								placeholder="Enter your hash rate"
							/>
						</div>
						<div className={style.row}>
							<FormControl variant="select" name="date" list={optionData} />
						</div>
						<div className={style.row}>
							<Button type="button" text="Calculate" />
						</div>
					</div>
					<div className={style.result}>
						<h4 className={style.resultTitle}>ESTIMATED 24 HOUR REVENUE:</h4>
						<h3 className={style.resultRevenue}>
							<span id="value">0.055 130 59</span>
							<span id="unit">ETH</span>
							<span id="currency">($1275)</span>
						</h3>
						<p className={style.resultDesc}>
							Revenue will change based on mining difficulty and Ethereum price.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculate;
