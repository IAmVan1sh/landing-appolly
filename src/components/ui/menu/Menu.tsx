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
			<button className={styles.menuButton} onClick={() => scrollHandler(window.innerHeight)}>About<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(window.innerHeight * 2)}>Features<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(window.innerHeight * 3)}>Family<ArrowButton/></button>
			<button className={styles.menuButton} onClick={() => scrollHandler(window.innerHeight * 4)}>Feedback<ArrowButton/></button>
		</section>
	);
};

export default Menu;