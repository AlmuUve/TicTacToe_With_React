import React from "react";
import Square from "./square.jsx";
import PropTypes from "prop-types";

const Board = ({ squares, onClick }) => (
	<div className="boardGame">
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

Board.propTypes = {
	onClick: PropTypes.string,
	squares: PropTypes.string
};

export default Board;
