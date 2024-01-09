import styles from "./NavBar.module.scss";
import Menu from "../../ui/menu/Menu.tsx";
import MenuToggleButton from "../../ui/menuToggleButton/MenuToggleButton.tsx";
import {useState} from "react";
import cn from "clsx";

const NavBar = () => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<header className={styles.header}>

			<nav className={cn(styles.headerNavBar, {
				[styles.show]: isShow
			})}>
				<img alt="logo" src="/logo.png" className={styles.headerNavBarLogo}/>

				<section className={styles.headerNavBarButtons}>
					<MenuToggleButton isShow={isShow} setIsShow={setIsShow}/>
				</section>
			</nav>

			<Menu isShow={isShow}/>

		</header>
	);
};

export default NavBar;