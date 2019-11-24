export type Grid = boolean[][];

export class CellSimulatorEngine {
  //private readonly gen1Grid: Grid;

  //private readonly gen2Grid: Grid;

  private currentGrid: Grid;

  private nextGrid: Grid;

  public constructor(rows: number, columns: number) {
    // setting up the grids
    // this.gen1Grid = this.emptyGrid(rows, columns);
    //
    // this.gen2Grid = this.emptyGrid(rows, columns);
    //
    // this.currentGrid = this.gen1Grid;
    // this.nextGrid = this.gen2Grid;

    this.currentGrid = this.emptyGrid(rows, columns);
    this.nextGrid = [...this.currentGrid];
  }

  // allows to toggle the state of the cell at the board coordinates: dead -> alive or alive -> dead

  public toggleCell = (row: number, column: number): Grid => {
    this.currentGrid[row][column] = !this.currentGrid[row][column];
    return this.currentGrid;
  };

  public iterate = (): Grid => {
    console.log("starting iteration");

    // this.currentGrid.forEach((row: boolean[], rowIndex: number) => {
    //   row.forEach((_, columnIndex: number) => {
    //     const liveNeighbours = this.countLiveNeighbours(rowIndex, columnIndex);
    //     this.gen2CellState(rowIndex, columnIndex, liveNeighbours);
    //   });
    // });

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        //  let state = grid[i][j];
        let state = this.currentGrid[j][i];
        // Count live neighbors!
        //let sum = 0;
        let neighbors = this.countLiveNeighbours(j, i);
        console.log("neigbours are ", neighbors);
        if (state === false && neighbors === 3) {
          this.nextGrid[j][i] = true;
        } else if (state === true && (neighbors < 2 || neighbors > 3)) {
          this.nextGrid[j][i] = false;
        } else {
          this.nextGrid[j][i] = state;
        }
      }
    }

    this.updateGrid();
    return this.currentGrid;
  };

  public resetCurrentGrid = (): Grid => {
    this.currentGrid.map(row => row.fill(false));
    return this.currentCellBoard;
  };

  private emptyGrid = (rows: number, columns: number): Grid => {
    return Array(rows)
      .fill(false)
      .map(() => Array(columns).fill(false));
  };

  // getters setters

  public get width(): number {
    return this.currentGrid[0].length;
  }

  public get height(): number {
    return this.currentGrid.length;
  }

  public get currentCellBoard(): Grid {
    return this.currentGrid;
  }

  public get nextCellBoard(): Grid {
    return this.nextGrid;
  }

  // get sum of live cells around the coordinates. With the edges we need to wrap it to the other side
  // using (row + height) % height

  private countLiveNeighbours = (row: number, column: number): number => {
    let liveNeighbours = 0;
    // const gridcols = this.currentGrid[0].length;
    // const gridrows = this.currentGrid.length;

    for (let i = row - 1; i <= row + i; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        let col = (j + this.width) % this.width;
        let row = (i + this.height) % this.height;
        liveNeighbours += Number(this.currentGrid[row][col]);
      }
    }
    console.log(liveNeighbours);

    return liveNeighbours;
  };

  // Logic for the rules of the next gen cell state

  // if false -> 3 live neigbours then True
  // if true -> < 2 live neigbours or > 3 live neigbours then False

  private gen2CellState = (
    row: number,
    column: number,
    liveNeighbours: number
  ): void => {
    // if (liveNeighbours === 3) {
    //   this.nextGrid[row][column] = true;
    // } else if (liveNeighbours > 3 || liveNeighbours < 2)
    //   this.nextGrid[row][column] = false;
    // else {
    //   this.nextGrid[row][column] = this.nextGrid[row][column];
    // }

    if (liveNeighbours === 3) {
      this.nextGrid[row][column] = true;
    } else if (liveNeighbours === 4) {
      this.nextGrid[row][column] = this.currentGrid[row][column];
    } else {
      this.nextGrid[row][column] = false;
    }
  };

  private updateGrid = (): void => {
    const gen2 = this.nextGrid;
    this.nextGrid = this.currentGrid;

    this.currentGrid = gen2;
  };
}
