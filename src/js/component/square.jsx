import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import "../../styles/index.scss";

export const Square = props => {
	const [isEmpty, setEmpty] = useState(true);

	if (isEmpty) {
		//setEmpty(false);
		return (
			<div
				onClick={() => {
					props.onMyClick();
					console.log(props);
				}}>
				{props.symbol}
			</div>
		);
	} else {
		return null;
	}
};

Square.propTypes = {
	symbol: PropTypes.string,
	onMyClick: PropTypes.any
};
