import { FC } from "react";
import { useEffect, useState } from "react";
interface Pricesprops {
	priceInfo: {
		stockPrice: number;
		priceArr: number[];
		percentChange: number;
		isUp: boolean;
		costBasisIsUp: boolean;
		costBasisPercentChange: number;
	};
	changePrice: () => void;
}
const Prices: FC<Pricesprops> = ({ priceInfo, changePrice }) => {
	useEffect(() => {
		let myInterval: number;

		myInterval = window.setInterval(() => {
			changePrice();
		}, 1500);

		return () => {
			clearInterval(myInterval);
		};
	}, [priceInfo.stockPrice]);
	console.log(typeof priceInfo.percentChange);
	return (
		<>
			<div className="stock-name">$PAPER</div>
			<div className="stock-prices-container">
				<div className="stock-price">${priceInfo.stockPrice.toFixed(3)}</div>
				<div
					className="percent-change"
					style={{ color: priceInfo.isUp ? "green" : "red" }}
				>
					{`(${priceInfo.percentChange.toFixed(2)}%)`}
				</div>
			</div>
		</>
	);
};

export default Prices;
