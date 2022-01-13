import { Modal, Button } from "react-bootstrap";
import React, { FC } from "react";

interface PopUpProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
	priceInfo: {
		stockPrice: number;
		priceArr: number[];
		percentChange: number;
		isUp: boolean;
		costBasisIsUp: boolean;
		costBasisPercentChange: number;
	};
	stocksBought: number;
	account: number;
	resetGame: () => void;
}

const PopUp: FC<PopUpProps> = ({
	showModal,
	setShowModal,
	priceInfo,
	stocksBought,
	account,
	resetGame,
}) => {
	return (
		<>
			<Modal show={showModal} onHide={() => setShowModal(false)} centered>
				<Modal.Header>
					<Modal.Title>
						<div className="game-over">GAME OVER</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{`You made $${(priceInfo.stockPrice * stocksBought === 0
						? account
						: priceInfo.stockPrice * stocksBought
					).toFixed(2)}`}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							resetGame();
							setShowModal(false);
						}}
					>
						Play Again
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default PopUp;
