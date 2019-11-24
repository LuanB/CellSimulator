import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { CellSimulatorEngine } from "./Cellgameengine";

const cellSimulation = new CellSimulatorEngine(10, 10);

cellSimulation.toggleCell(2, 3);
cellSimulation.toggleCell(2, 4);
cellSimulation.toggleCell(2, 5);

ReactDOM.render(
  <App cellSimulatorEngine={cellSimulation} />,
  document.getElementById("root")
);
