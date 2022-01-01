import { Modal, closeButton, Header, Button } from "react-bootstrap";
import { useState } from "react";
const PopUp = ({ showModal, setShowModal }) => {
	return (
		<>
			<button onClick={() => setShowModal(true)}>Show Modal</button>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary">Save Changes</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default PopUp;
