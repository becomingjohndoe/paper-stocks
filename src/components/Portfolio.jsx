import { useState } from "react";
import generatePriceData from "../utils/price-data";
import Change from "./Change";
import Prices from "./Prices";
import { Chart } from "./Charts";
import PopUp from "./PopUp";
const Portfolio = () => {
	const [account, setAccount] = useState(10000);
	const [stocksBought, setStocksBought] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [priceInfo, setPriceInfo] = useState({
		stockPrice: 100,
		priceArr: [],
	});

	const changePrice = () => {
		if (priceInfo.priceArr.length < 30) {
			setPriceInfo((prevState) => {
				let { lastPrice, movementPercent } = generatePriceData(
					prevState.stockPrice
				)[4];
				return {
					stockPrice: lastPrice,
					priceArr: [...prevState.priceArr, lastPrice],
				};
			});
		} else {
			alert(`You made ${priceInfo.stockPrice * stocksBought}${account}`);
			// setPriceArr([]);
		}
	};

	const buyAllStock = () => {
		setStocksBought((prevState) => {
			return account / priceInfo.stockPrice;
		});
		setAccount((prevState) => {
			return prevState - (priceInfo.stockPrice * account) / priceInfo.stockPrice;
		});
	};

	const sellAllStock = () => {
		setAccount((prevState) => {
			return prevState + priceInfo.stockPrice * stocksBought;
		});
		setStocksBought(0);
	};

	return (
		<div className="main-container">
			<PopUp setShowModal={setShowModal} showModal={showModal} />
			<div className="portfolio__container">
				<div className="money">account: ${account.toFixed(2)}</div>
				<div className="stocks">stocks owned {stocksBought.toFixed(2)}</div>
				<div className="portfolio__container__buy">
					<button onClick={buyAllStock} className="buy-button">
						Buy
					</button>
				</div>
				<div className="portfolio__container__sell">
					<button onClick={sellAllStock} className="sell-button">
						Sell
					</button>
				</div>
			</div>
			<Change />
			<Prices stockPrice={priceInfo.stockPrice} changePrice={changePrice} />
			<Chart prices={priceInfo.priceArr} />
		</div>
	);
};

export default Portfolio;
