import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const MyModal = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);

	return (
		<Modal.Dialog show={showModal} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>TicTacToe with React!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Choose your weapon</p>
				<input type="text" placeholder="Player 1" />
				<input type="text" placeholder="Player 2" />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					X
				</Button>
				<Button variant="secondary" onClick={handleClose}>
					O
				</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
};

// MyModal.propTypes = {
// 	click: PropTypes.bool
// };
