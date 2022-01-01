import { useState } from "react";
import generatePriceData from "../utils/price-data";
import Change from "./Change";
import Prices from "./Prices";
import { Chart } from "./Charts";
import PopUp from "./PopUp";
import { Button } from "react-bootstrap";
import BuySell from "./BuySell";

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
			setShowModal(true);
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

	const resetGame = () => {
		setAccount(10000);
		setStocksBought(0);
		setPriceInfo({
			stockPrice: 100,
			priceArr: [],
		});
	};

	return (
		<div className="main-container">
			<PopUp
				setShowModal={setShowModal}
				showModal={showModal}
				priceInfo={priceInfo}
				stocksBought={stocksBought}
				account={account}
				resetGame={resetGame}
			/>
			<div className="portfolio__container">
				<div className="money">account: ${account.toFixed(2)}</div>
				<div className="stocks">stocks owned {stocksBought.toFixed(2)}</div>
			</div>
			<Change />
			<Prices stockPrice={priceInfo.stockPrice} changePrice={changePrice} />
			<Chart prices={priceInfo.priceArr} />
			<BuySell buyAllStock={buyAllStock} sellAllStock={sellAllStock} />
		</div>
	);
};

export default Portfolio;
