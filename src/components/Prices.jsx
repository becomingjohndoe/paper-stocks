import { Component } from "react";
import { useEffect, useState } from "react";

export default function Prices({ priceInfo, changePrice }) {
	useEffect(() => {
		let myInterval;

		myInterval = setInterval(() => {
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
}
