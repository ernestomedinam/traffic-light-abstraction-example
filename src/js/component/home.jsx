import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";

const Home = () => {
	// SEMAFORO DE DOS LUCES
	const [lights, setLights] = useState([
		{
			color: "red",
			on: true,
		},
		{
			color: "green",
			on: false,
		},
	]);
	// SEMAFORO DE TRES LUCES
	const [lights1, setLights1] = useState([
		{
			color: "red",
			on: true,
		},
		{
			color: "yellow",
			on: false,
		},
		{
			color: "green",
			on: false,
		},
	]);
	// SEMAFORO DE CUATRO LUCES
	const [lights2, setLights2] = useState([
		{
			color: "red",
			on: true,
		},
		{
			color: "yellow",
			on: false,
		},
		{
			color: "green",
			on: false,
		},
		{
			color: "green",
			on: false,
		},
	]);
	return (
		<div className="d-flex w-100 h-100 justify-content-center align-items-center">
			<TrafficLight lights={lights} setLights={setLights} />
			<TrafficLight lights={lights1} setLights={setLights1} />
			<TrafficLight lights={lights2} setLights={setLights2} />
			{/* ASI ERA COMO SE VEIA ANTES DE CONSTRUIR COMPONENTES
			<div className="box">
				<div
					className={`light red${color === "red" ? " on" : ""}`}
					onClick={(e) => setColor("red")}
				/>
				<div
					className={`light yellow${color === "yellow" ? " on" : ""}`}
					onClick={(e) => setColor("yellow")}
				/>
				<div
					className={`light green${color === "green" ? " on" : ""}`}
					onClick={(e) => setColor("green")}
				/>
			</div> */}
		</div>
	);
};

export default Home;
