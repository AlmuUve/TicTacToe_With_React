import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { MyModal } from "./mymodal.jsx";
import { Square } from "./square.jsx";
import "../../styles/index.scss";

export function Home() {
	const [player, setPlayer] = useState(true);
	const [symbol, setSymbol] = useState("x");

	useEffect(
		() => {
			player ? setSymbol("x") : setSymbol("O");
		},
		[player]
	);

	const handleClick = () => {
		setPlayer(false);
	};

	let drawSquare = new Array(9).fill(null).map((value, i) => {
		return (
			<Square onMyClick={() => handleClick()} symbol={symbol} key={i}>
				{value}
			</Square>
		);
	});
	return (
		<Fragment>
			<div className="row">
				<div className="square">{drawSquare[0]}</div>
				<div className="square">{drawSquare[1]}</div>
				<div className="square">{drawSquare[2]}</div>
			</div>
			<div className="row">
				<div className="square">{drawSquare[3]}</div>
				<div className="square">{drawSquare[4]}</div>
				<div className="square">{drawSquare[5]}</div>
			</div>
			<div className="row">
				<div className="square">{drawSquare[3]}</div>
				<div className="square">{drawSquare[4]}</div>
				<div className="square">{drawSquare[5]}</div>
			</div>

			{/* <MyModal>
				<Button />
				<Button />
			</MyModal> */}
		</Fragment>
	);
}
