import styles from "./Features.module.scss";

const Features = () => {
	return (
		<div className={styles.features}>
			<h2>Here are a few reasons why you would need some of our berries right now...</h2>

			<div className={styles.featuresContent}>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-ice-creame.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-waffles.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-pancake.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/roll.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-in-strawberry.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawbarry-cake.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/mochie.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-milk.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberry-jam.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/straberry-in-chocolate.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/strawberries.webp"/>
				<img alt="" className={styles.featuresContentItem} src="/tastes/chocolate.webp"/>
			</div>

		</div>
	);
};

export default Features;