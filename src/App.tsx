import * as React from "react";

import "./App.css";

import { Button } from "./components/buttons/button.component";
import { Grid } from "./components/grid/grid.component";
import * as CellEngine from "./Cellgameengine";

export interface IProps {
  cellSimulatorEngine: CellEngine.CellSimulatorEngine;
}

export interface IState {
  gridFull: CellEngine.Grid;
}

export class App extends React.Component<IProps, IState> {
  public state = {
    gridFull: this.props.cellSimulatorEngine.currentCellBoard
  };

  public render() {
    return (
      <div>
        <h1> Cell Simulation</h1>
        <Button id="nextButton" label="Next" onClick={this.iterate} />
        <Button id="clearButton" label="Clear" onClick={this.clear} />
        <Grid gridFull={this.state.gridFull} selectBox={this.selectBox} />
      </div>
    );
  }

  private clear = (): void => {
    this.props.cellSimulatorEngine.resetCurrentGrid();
    this.setState({
      gridFull: this.props.cellSimulatorEngine.resetCurrentGrid()
    });
  };

  private iterate = (): void => {
    this.props.cellSimulatorEngine.iterate();
    this.setState({
      gridFull: this.props.cellSimulatorEngine.currentCellBoard
    });
    return;
  };

  private selectBox = (row: number, col: number) => () => {
    this.setState({
      gridFull: this.props.cellSimulatorEngine.toggleCell(row, col)
    });
  };
}
