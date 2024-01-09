import styles from "./Intro.module.scss";

const Intro = () => {
	return (
		<section className={styles.intro}>

			<section className={styles.introInner}>

				<img alt="" className={styles.introInnerImage}/>

				<section className={styles.introInnerContent}>

					<h1>Hello</h1>

					<p>Lorem ipsum</p>

				</section>

			</section>

		</section>
	);
};

export default Intro;