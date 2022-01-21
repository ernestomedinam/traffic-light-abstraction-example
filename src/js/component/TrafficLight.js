import PropTypes from "prop-types";
import React, { useState } from "react";
import { BlackBox } from "./BlackBox";
import { Light } from "./Light";

export const TrafficLight = ({ lights, setLights }) => {
	return (
		<BlackBox>
			{lights.map((light, index) => {
				return (
					<Light
						key={index}
						color={light.color}
						on={light.on}
						handleClick={(e) => {
							const newLights = lights.map((l) => {
								return {
									color: l.color,
									on: l.color === light.color,
								};
							});
							setLights(newLights);
						}}
					/>
				);
			})}
		</BlackBox>
	);
};

TrafficLight.propTypes = {
	lights: PropTypes.array,
	setLights: PropTypes.func,
};
