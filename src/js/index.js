//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//new comment to try pushing to github on a laptop with ssh but through https://
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
