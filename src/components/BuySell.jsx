import Button from "react-bootstrap/Button";
import { useState } from "react";
const BuySell = ({ buyAllStock, sellAllStock }) => {
	const [buyOrSell, setBuyOrSell] = useState(true);

	return (
		<div className="buy-sell-container">
			{buyOrSell ? (
				<div className="portfolio__container__buy">
					<Button
						onClick={() => {
							buyAllStock();
							setBuyOrSell(false);
						}}
						className="buy-button"
					>
						Buy
					</Button>
				</div>
			) : (
				<div className="portfolio__container__sell">
					<Button
						onClick={() => {
							sellAllStock();
							setBuyOrSell(true);
						}}
						className="sell-button"
					>
						Sell
					</Button>
				</div>
			)}
		</div>
	);
};

export default BuySell;
