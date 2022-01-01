import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const PopUp = ({
	showModal,
	setShowModal,
	priceInfo,
	stocksBought,
	account,
	resetGame,
}) => {
	return (
		<>
			<button onClick={() => setShowModal(true)}>Show Modal</button>
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
