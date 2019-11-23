import * as React from "react";
import * as CellEngine from "../../cellgameengine";
import Grid from "../../components/grid/grid.component";
import "./simulationpage.styles.scss";

export interface IAppProps {
  game: CellEngine.CellSimulatorEngine;
}

export interface IAppState {
  cells: CellEngine.Grid;
  isPlaying: boolean;
  //  animation: NodeJS.Timer;
  speed: number;
}

export class SimulationPage extends React.Component<IAppProps, IAppState> {
  public state = {
    cells: this.props.game.cells,
    isPlaying: true,
    speed: 5
  };
  public render() {
    return (
      <div className="simulationpage">
        // bring in components to construct the cell simulation page // header
        // title // controlls // grid
        <h1> Simulation page </h1>
        <Grid cells={this.state.cells} onMouseDown={this.toggleCell} />
      </div>
    );
  }

  private toggleCell = (row: number, column: number) => () => {
    this.setState({ cells: this.props.game.toggleCell(row, column) });
  };
}
