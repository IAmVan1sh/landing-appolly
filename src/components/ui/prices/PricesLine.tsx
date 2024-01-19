import styles from "./Prices.module.scss";
import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

const PricesLine: FC<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({children}) => {
	return (
		<div className={styles.pricesLine}>
			<img alt="" src="/assets/heart.png"/>
			<p>{children}</p>
		</div>
	);
};

export default PricesLine;