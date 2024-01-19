import styles from "./Prices.module.scss";
import PricesLine from "./PricesLine.tsx";

const Prices = () => {
	return (
		<div className={styles.prices}>
			<PricesLine>1 dozen - 9$</PricesLine>
			<PricesLine>2 dozen - 15$</PricesLine>
			<PricesLine>4 dozen - 30$</PricesLine>
			<PricesLine>Basket - 50$</PricesLine>
			<PricesLine>5 kilo - 100$</PricesLine>
		</div>
	);
};

export default Prices;