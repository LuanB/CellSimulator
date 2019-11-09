import React from "react";
import Grid from "../../components/grid/grid.component";
import "./simulationpage.styles.scss";

const SimulationPage: React.FC = () => {
  return (
    <div className="simulationpage">
      // bring in components to construct the cell simulation page // header
      //title // controlls // grid
      <h1> Simulation page </h1>
      <Grid />
    </div>
  );
};

export default SimulationPage;
