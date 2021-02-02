import React, { useState, Fragment } from "react";
import { calculateWinner } from "../helpers.js";
import Board from "./board.jsx";

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = i => {
		const myBoard = [...board];
		if (winner || myBoard[i]) return;
		//draw X or O
		myBoard[i] = xIsNext ? "X" : "O";
		setBoard(myBoard);
		setXisNext(!xIsNext);
	};

	const renderMoves = () => {
		return (
			<button
				className="resetButton"
				onClick={() => setBoard(Array(9).fill(null))}>
				Start again!
			</button>
		);
	};

	return (
		<Fragment>
			<p className="next">
				{winner ? (
					<p className="winner">
						{"🏆  Winner is: " + winner + " 🏆"}
					</p>
				) : (
					<p className="nextIs">
						{"Next is " + (xIsNext ? "X" : "O") + " ⏭️"}
					</p>
				)}
			</p>
			<Board className="game" squares={board} onClick={handleClick} />
			<div className="buttonContainer">{renderMoves()}</div>
		</Fragment>
	);
};

export default Game;
