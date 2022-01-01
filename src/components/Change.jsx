import { useState } from "react";

const Change = () => {
	const [change, setChange] = useState(-14);
	return (
		<div className="change-container">
			<div className="change">${change}%</div>
		</div>
	);
};

export default Change;
