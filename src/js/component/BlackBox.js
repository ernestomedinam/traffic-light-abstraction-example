import PropTypes from "prop-types";
import React from "react";

export const BlackBox = (props) => {
	return <div className="box">{props.children}</div>;
};

BlackBox.propTypes = {
	children: PropTypes.node,
};
