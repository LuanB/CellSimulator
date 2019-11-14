import * as React from "react";

import "./App.css";

import Buttons from "./components/buttons/buttons.component";
import Grid from "./components/grid/grid.component";

interface IProps {}

interface IState {
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
      gridFull: this.make2DArray()
    };
  }

  make2DArray = () => {
    let arr = new Array(this.cols).fill(false);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(this.rows).fill(false);
    }
    return arr;
  };

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  nextGenButton = () => {
    this.nextGen();
  };

  clear = () => {
    var grid = this.make2DArray();
    this.setState({
      gridFull: grid
    });
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

  nextGen = () => {
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
      gridFull: g2
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> Cell Simulation</h1>
        <Buttons nextGenButton={this.nextGenButton} clear={this.clear} />

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
