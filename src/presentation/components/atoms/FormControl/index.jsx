// -- style
import style from "./style.module.scss";

const FormControl = (props) => {
	const {
		variant = "input",
		color = "black",
		list = [],
		...otherProps
	} = props;

	if (variant === "select") {
		return (
			<select {...otherProps} {...props} className={`${style.select} ${color}`}>
				{list.map((val, idx) => {
					return (
						<option value={val.value} key={`op-${idx}`}>
							{val.text}
						</option>
					);
				})}
			</select>
		);
	}

	return (
		<input {...otherProps} {...props} className={`${style.input} ${color}`} />
	);
};

export default FormControl;
