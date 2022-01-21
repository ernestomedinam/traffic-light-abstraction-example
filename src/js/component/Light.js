import React from "react";
import PropTypes from "prop-types";

export const Light = (props) => {
	return (
		<div
			className={`light ${props.color}${props.on ? " on" : ""}`}
			onClick={props.handleClick}
		/>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	on: PropTypes.bool,
	handleClick: PropTypes.func,
};
