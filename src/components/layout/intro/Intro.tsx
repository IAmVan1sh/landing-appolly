import styles from "./Intro.module.scss";
import Button from "../../ui/buttons/button/Button.tsx";

const Intro = () => {
	return (
		<section className={styles.intro}>

			<section className={styles.introInner}>

				<img alt="" className={styles.introInnerImage}/>

				<section className={styles.introInnerContent}>

					<h1>As usual, my friend?</h1>

					<p>two dozens of perfectly washed fresh berries straight to your home in the next 30 minutes</p>

					<img alt="" src="/assets/arrows.gif"/>

					<Button>Buy Now</Button>

				</section>

			</section>

		</section>
	);
};

export default Intro;