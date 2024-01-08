import styles from "./NavBar.module.scss";
import Menu from "../../ui/menu/Menu.tsx";
import MenuButton from "../../ui/menuButton/MenuButton.tsx";
import {useState} from "react";

const NavBar = () => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<header className={styles.header}>

			<nav className={styles.headerNavBar}>
				<img alt="logo" src="/logo.png" className={styles.headerNavBarLogo}></img>

				<section className={styles.headerNavBarButtons}>
					{/*<NavButton>about</NavButton>*/}
					<MenuButton isShow={isShow} setIsShow={setIsShow}/>
				</section>
			</nav>

			<Menu isShow={isShow}/>

		</header>
	);
};

export default NavBar;