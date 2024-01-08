// import NavButton from "../buttons/navButton/NavButton.tsx";
import styles from "./Menu.module.scss";
import {FC} from "react";
import cn from "clsx";
import {IMenu} from "../../../types/IMenu.ts";

const Menu: FC<IMenu> = ({isShow}) => {
	return (
		<section className={cn(styles.menu, {
			[styles.show]: isShow
		})}>
		</section>
	);
};

export default Menu;