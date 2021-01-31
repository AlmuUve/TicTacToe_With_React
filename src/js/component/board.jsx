import React, { useState } from "react";
import Square from "./square.jsx";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const Board = ({ squares, onClick }) => {
	<div className="board">
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick("value")} />
		))}
	</div>;
};
