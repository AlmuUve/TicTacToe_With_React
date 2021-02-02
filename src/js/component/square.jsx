import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
	return (
		<button className="squareButton" onClick={onClick}>
			{value}
		</button>
	);
};

Square.propTypes = {
	onClick: PropTypes.string,
	value: PropTypes.any
};

export default Square;
