import styles from "./NavButton.module.scss";
import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

const NavButton: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	);
};

export default NavButton;