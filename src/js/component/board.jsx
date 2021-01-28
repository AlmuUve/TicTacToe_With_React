import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const Board = () => {
	return (
		<div>
			<div className="Introduction">
				<h1>TicTacToe with React!</h1>
				<span>Is your turn</span>
				<Button variant="light">Reset</Button>
			</div>
			<div className="Square" />
		</div>
	);
};

// Board.propTypes = {
// 	name: PropTypes.bool
// };
