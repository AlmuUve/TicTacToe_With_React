import React, { Fragment, useEffect, useState } from "react";
import Board from "./board.jsx";
import { calculateWinner } from "../helpers.js";

export function Home() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = i => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "X" : "O";
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	const renderMoves = () => (
		<button onClick={() => setBoard(Array(9).fill(null))}>
			Let's start!
		</button>
	);

	return (
		<Fragment>
			<Board squares={board} onClick={handleClick} />
			<div>
				<span>
					{winner
						? "Winner is" + winner
						: "Next is" + (xIsNext ? "X" : "O")}
				</span>
				{renderMoves()}
			</div>
		</Fragment>
	);
}
