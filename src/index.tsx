import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { CellSimulatorEngine } from "./Cellgameengine";

const cellSimulation = new CellSimulatorEngine(10, 10);

ReactDOM.render(
  <App cellSimulatorEngine={cellSimulation} />,
  document.getElementById("root")
);
