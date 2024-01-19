import styles from "./Button.module.scss";
import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children,...props}) => {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;