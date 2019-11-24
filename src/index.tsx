import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CellSimulatorEngine } from "./cellgameengine";

const cellSimulation = new CellSimulatorEngine(60, 60);

cellSimulation.toggleCell(30, 29);

ReactDOM.render(<App />, document.getElementById("root"));
