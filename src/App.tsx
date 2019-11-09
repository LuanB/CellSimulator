import React from "react";
import SimulationPage from "./pages/simulationpage/simulationpage.componet";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Cell Simulator</header>
      <SimulationPage />
    </div>
  );
};

export default App;
