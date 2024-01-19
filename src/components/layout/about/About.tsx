import styles from "./About.module.scss";
import Prices from "../../ui/prices/Prices.tsx";

const About = () => {
	return (
		<section className={styles.about}>

			<div className={styles.aboutTitle}>
				<h2>all you need to know</h2>

				<p>Is our pricing, right?</p>
			</div>

			<div className={styles.aboutContent}>
				<Prices />

				<p>There’s a special offer for you down below :)</p>

				<img alt="" className={styles.aboutContentImage}/>
			</div>

		</section>
	);
};

export default About;