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
  isPlaying: boolean;
  animation: NodeJS.Timer;
  speed: number;
}

export class App extends React.Component<IProps, IState> {
  //state: IState;
  // speed: number;
  // rows: number;
  // cols: number;

  private static determineInterval(speed: number): number {
    return 3000 / (3 * Math.pow(speed, 1.5));
  }

  public state = {
    animation: setInterval(() => {}, 1000),
    gridFull: this.props.cellSimulatorEngine.currentCellBoard,
    isPlaying: false,
    speed: 5
  };

  public render() {
    return (
      <div>
        <h1> Cell Simulation</h1>
        <Button id="nextButton" label="Next" onClick={this.iterate} />
        <Button id="clearButton" label="Clear" onClick={this.clear} />
        <Button id="playButton" label="Play" onClick={this.togglePlay} />
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

  private togglePlay = (): void => {
    const isPlaying = !this.state.isPlaying;
    this.setState({ isPlaying });

    // Keep in mind that we’ve just updated isPlaying to the new state
    if (isPlaying) {
      this.setState({
        animation: setInterval(this.iterate, App.determineInterval(3))
      });
    } else {
      clearInterval(this.state.animation);
    }
  };

  private selectBox = (row: number, col: number) => () => {
    this.setState({
      gridFull: this.props.cellSimulatorEngine.toggleCell(row, col)
    });
  };
}

//export default App;
