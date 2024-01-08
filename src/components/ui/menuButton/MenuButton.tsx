import styles from "./MenuButton.module.scss";
import {FC} from "react";
import {IMenuButton} from "../../../types/IMenuButton.ts";

const MenuButton: FC<IMenuButton> = ({isShow, setIsShow}) => {
	const menuButtonHandler = () => {
		setIsShow(!isShow);
	};

	return (
		<button className={styles.menuButton} onClick={menuButtonHandler}>
			<span className={styles.menuButtonIcon}></span>
		</button>
	);
};

export default MenuButton;