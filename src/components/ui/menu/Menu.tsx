// import NavButton from "../buttons/navButton/NavButton.tsx";
import styles from "./Menu.module.scss";
import {FC} from "react";
import cn from "clsx";
import {IMenu} from "../../../types/IMenu.ts";
import ArrowButton from "./ArrowButton.tsx";



const Menu: FC<IMenu> = ({isShow}) => {

	const scrollHandler = (position: number) => {
		window.scrollTo({
			top: position
		});
	};

	return (
		<section className={cn(styles.menu, {
			[styles.show]: isShow
		})}>
			<button className={styles.menuButton} onClick={() => scrollHandler(0)}>About<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(200)}>Features<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(300)}>Family<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(400)}>Feedback<ArrowButton/></button>
		</section>
	);
};

export default Menu;