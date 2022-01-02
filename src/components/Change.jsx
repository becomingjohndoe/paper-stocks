import { useState } from "react";

const Change = ({ priceInfo }) => {
	const [change, setChange] = useState(-14);
	return (
		<div className="change-container">
			<div className="change">${priceInfo.percentChange}%</div>
		</div>
	);
};

export default Change;
