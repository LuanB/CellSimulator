import * as React from "react";

import "./App.css";

import Buttons from "./components/buttons/buttons.component";
import Grid from "./components/grid/grid.component";

// interface BoxElement {
//   boxClass: string;
//   key: string;
//   boxId: string;
//   row: number;
//   col: number;
//   selectBox: (row: number, col: number) => void;
// }
//

// interface BoxElement {
//   boxClass: string;
//   key: string;
//   boxId: string;
//   row: number;
//   col: number;
//   selectBox: (row: number, col: number) => void;
// }

// interface GridElement {
//   gridFull: boolean[][];
//   rows: number;
//   cols: number;
//   selectBox: (row: number, col: number) => void;
// }
//
// interface ButtonElement {
//   playButton: () => void;
//   clear: () => void;
//   seed: () => void;
//   gridSize: (size: string) => void;
// }
//
// interface IProps {
//   Grid: GridElement;
//   Buttons: ButtonElement;
// }

interface IProps {}

interface IState {
  generation: number;
  gridFull: boolean[][];
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
      generation: 0,
      gridFull: new Array(this.rows)
        .fill(false)
        .map(() => new Array(this.cols).fill(false))
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    });
  };

  playButton = () => {
    //  clearInterval(this.intervalId);
    //  this.intervalId = setInterval(this.play, this.speed);
  };

  clear = () => {
    var grid = new Array(this.rows)
      .fill(false)
      .map(() => new Array(this.cols).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0
    });
  };

  gridSize = size => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }
    this.clear();
  };

  // countLiveNeighbours = (row: number, column: number): number => {
  //     let liveNeighbours = 0;
  //     const gridcols = this.gen1Grid[0].length;
  //     const gridrows = this.gen1Grid.length;
  //
  //     for (let i = row - 1; i <= row + i; i++) {
  //       for (let j = column - 1; j <= column + 1; j++) {
  //         let col = (j + gridcols) % gridcols;
  //         let row = (i + gridrows) % gridrows;
  //         liveNeighbours += Number(this.gen1Grid[row][col]);
  //       }
  //     }
  //
  //     return liveNeighbours;
  //   };

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div>
        <h1> Cell Simulation</h1>
        <Buttons
          playButton={this.playButton}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />

        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;
