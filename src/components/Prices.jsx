import { Component } from "react";
import { useEffect, useState } from "react";

export default function Prices({ stockPrice, changePrice }) {
	useEffect(() => {
		let myInterval;

		myInterval = setInterval(() => {
			changePrice();
		}, 1500);

		return () => {
			clearInterval(myInterval);
		};
	}, [stockPrice]);
	return (
		<div className="stock-prices-container">
			<div className="stock-name">stonk 1</div>
			<div className="stock-price">${stockPrice.toFixed(3)}</div>
		</div>
	);
}
