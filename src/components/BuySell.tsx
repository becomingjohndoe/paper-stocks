import Button from "react-bootstrap/Button";
import { useState, FC } from "react";
interface BuySellProps {
	buyAllStock: () => void;
	sellAllStock: () => void;
	stocksBought: number;
	costBasis: number;
	priceInfo: {
		stockPrice: number;
		priceArr: number[];
		percentChange: number;
		isUp: boolean;
		costBasisIsUp: boolean;
		costBasisPercentChange: number;
	};
}
const BuySell: FC<BuySellProps> = ({
	buyAllStock,
	sellAllStock,
	stocksBought,
	costBasis,
	priceInfo,
}) => {
	const [buyOrSell, setBuyOrSell] = useState(true);

	return (
		<div className="buy-sell-container">
			<div className="portfolio__container">
				<div className="stocks">shares owned</div>
				<div className="stocks">{stocksBought.toFixed(2)} </div>
			</div>

			<div className="portfolio__container">
				<div className="money">cost basis</div>
				<div className="money"> {costBasis.toFixed(2)}</div>
				<div
					className="percent-change"
					style={{ color: priceInfo.costBasisIsUp ? "green" : "red" }}
				>
					{`(${priceInfo.costBasisPercentChange.toFixed(2)}%)`}
				</div>
			</div>
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
