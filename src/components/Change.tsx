import { FC } from "react";
interface ChangeProps {
	priceInfo: {
		stockPrice: number;
		priceArr: number[];
		percentChange: number;
		isUp: boolean;
		costBasisIsUp: boolean;
		costBasisPercentChange: number;
	};
}
const Change: FC<ChangeProps> = ({ priceInfo }) => {
	return (
		<div className="change-container">
			<div className="change">${priceInfo.percentChange}%</div>
		</div>
	);
};

export default Change;
