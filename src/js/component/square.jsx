import React, { useState } from "react";
import "../../styles/index.scss";

export const Square = (value, onClick) => (
	<button className="button" onClick={onClick}>
		{value}
	</button>
);
