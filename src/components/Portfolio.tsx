import { useState, useRef } from "react";
import generatePriceData from "../utils/price-data";
import Prices from "./Prices";
import { Chart } from "./Charts";
import PopUp from "./PopUp";
import BuySell from "./BuySell";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";

const Portfolio = () => {
	const [account, setAccount] = useState(100);
	const [stocksBought, setStocksBought] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [costBasis, setCostBasis] = useState(0);
	const [priceInfo, setPriceInfo] = useState({
		stockPrice: 10,
		priceArr: [10],
		percentChange: 0,
		costBasisIsUp: true,
		costBasisPercentChange: 0,
		isUp: true,
	});
	const chartRef = useRef<HTMLDivElement>(null);

	const changePrice = () => {
		if (priceInfo.priceArr.length < 30) {
			setPriceInfo((prevState) => {
				let { lastPrice, movementPercent } = generatePriceData(
					prevState.stockPrice
				)[4];
				return {
					stockPrice: lastPrice,
					priceArr: [...prevState.priceArr, lastPrice],
					percentChange: percentChange(prevState.stockPrice, lastPrice),
					isUp: prevState.stockPrice < lastPrice,
					costBasisIsUp: costBasis < lastPrice,
					costBasisPercentChange: percentChange(costBasis, lastPrice),
				};
			});
			if (stocksBought > 0) {
				setAccount(stocksBought * priceInfo.stockPrice);
			}
		} else {
			setShowModal(true);
		}
	};

	const buyAllStock = () => {
		setStocksBought((prevState) => {
			return account / priceInfo.stockPrice;
		});
		if (chartRef.current) chartRef.current.style.background = "yellow";
		setCostBasis(priceInfo.stockPrice);
	};

	const sellAllStock = () => {
		setStocksBought(0);
		if (chartRef.current) chartRef.current.style.background = "white";
		setCostBasis(0);
	};

	const resetGame = () => {
		setAccount(100);
		setStocksBought(0);
		setPriceInfo({
			stockPrice: 10,
			priceArr: [10],
			percentChange: 0,
			costBasisIsUp: true,
			costBasisPercentChange: 0,

			isUp: true,
		});
		setCostBasis(0);
	};

	function percentChange(before: number, after: number): number {
		return ((after - before) / before) * 100;
	}

	return (
		<Container>
			<Row>
				<Col>
					<Header />
					<PopUp
						setShowModal={setShowModal}
						showModal={showModal}
						priceInfo={priceInfo}
						stocksBought={stocksBought}
						account={account}
						resetGame={resetGame}
					/>
					<div className="account-container">
						<div className="days">
							<span>Account Balance</span>
							Day {priceInfo.priceArr.length}/30
						</div>
						<div className="balance">
							<div className="account-balance">${account.toFixed(2)}</div>
							<div
								className="percent-change"
								style={{ color: priceInfo.isUp ? "green" : "red" }}
							>
								{`(${priceInfo.percentChange.toFixed(2)}%)`}
							</div>
						</div>
					</div>

					<div className="chart" ref={chartRef}>
						<Prices priceInfo={priceInfo} changePrice={changePrice} />
						<Chart priceInfo={priceInfo} />
						<BuySell
							buyAllStock={buyAllStock}
							sellAllStock={sellAllStock}
							stocksBought={stocksBought}
							costBasis={costBasis}
							priceInfo={priceInfo}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Portfolio;
