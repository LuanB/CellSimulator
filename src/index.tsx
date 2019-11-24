import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { CellSimulatorEngine } from "./cellgameengine";

const cellSimulation = new CellSimulatorEngine(60, 60);

cellSimulation.toggleCell(28, 29);
cellSimulation.toggleCell(28, 30);
cellSimulation.toggleCell(29, 28);
cellSimulation.toggleCell(29, 29);
cellSimulation.toggleCell(30, 29);

ReactDOM.render(
  <App cellSimulatorEngine={cellSimulation} />,
  document.getElementById("root")
);
