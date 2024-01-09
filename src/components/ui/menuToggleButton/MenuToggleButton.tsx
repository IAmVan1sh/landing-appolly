import styles from "./MenuToggleButton.module.scss";
import {FC} from "react";
import {IMenuButton} from "../../../types/IMenuButton.ts";
import cn from "clsx";

const MenuToggleButton: FC<IMenuButton> = ({isShow, setIsShow}) => {
	const menuButtonHandler = () => {
		setIsShow(!isShow);
	};

	return (
		<button className={styles.menuButton} onClick={menuButtonHandler}>
			<span className={cn(styles.menuButtonIcon, {
				[styles.show]: isShow
			})}></span>
		</button>
	);
};

export default MenuToggleButton;