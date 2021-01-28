import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import { MyModal } from "./mymodal.jsx";
import { Board } from "./board.jsx";

export function Home() {
	return (
		<Fragment>
			<MyModal>
				<Button />
				<Button />
			</MyModal>
			<Board />
		</Fragment>
	);
}
