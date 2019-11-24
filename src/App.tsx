import * as React from "react";

import "./App.css";

import Buttons from "./components/buttons/buttons.component";
import { Grid } from "./components/grid/grid.component";
import * as CellEngine from "./cellgameengine";

interface IProps {
  cellSimulatorEngine: CellEngine.CellSimulatorEngine;
}

interface IState {
  gridFull: CellEngine.Grid;
}

class App extends React.Component<IProps, IState> {
  state: IState;
  speed: number;
  rows: number;
  cols: number;

  constructor(props: IProps) {
    super(props);
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      gridFull: this.props.cellSimulatorEngine.currentCellBoard
    };
  }

  private nextGenButton = (): void => {
    this.iterate();
  };

  clear = () => {
    this.props.cellSimulatorEngine.resetCurrentGrid();
    this.setState({
      gridFull: this.props.cellSimulatorEngine.resetCurrentGrid()
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> Cell Simulation</h1>
        <Buttons nextGenButton={this.nextGenButton} clear={this.clear} />

        <Grid gridFull={this.state.gridFull} selectBox={this.selectBox} />
      </div>
    );
  }

  private iterate = (): void => {
    this.props.cellSimulatorEngine.iterate();
    this.setState({
      gridFull: this.props.cellSimulatorEngine.currentCellBoard
    });
  };

  private selectBox = (row: number, col: number) => () => {
    this.setState({
      gridFull: this.props.cellSimulatorEngine.toggleCell(row, col)
    });
  };
}

export default App;
