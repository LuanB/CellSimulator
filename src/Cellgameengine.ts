export type Grid = boolean[][];

export class CellSimulatorEngine {
  private currentGrid: Grid;

  private nextGrid: Grid;

  public constructor(rows: number, columns: number) {
    this.currentGrid = this.emptyGrid(rows, columns);

    // clone the current grid for nextgrid.
    this.nextGrid = [...this.currentGrid];
  }

  // allows to toggle the state of the cell at the board coordinates: dead -> alive or alive -> dead

  public toggleCell = (row: number, column: number): Grid => {
    this.currentGrid[row][column] = !this.currentGrid[row][column];
    return this.currentGrid;
  };

  public iterate = (): Grid => {
    // Logic for the rules of the next gen cell state

    // if false -> 3 live neigbours then True
    // if true -> < 2 live neigbours or > 3 live neigbours then False

    // loop through the 2D Array

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let state = this.currentGrid[j][i];
        let neighbors = this.countLiveNeighbours(j, i);

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

  private countLiveNeighbours = (row: number, column: number): number => {
    let liveNeighbours = 0;

    console.log("starting count neighbors loop");
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let wrapedcol = (j + column + this.width) % this.width;
        let wrapedrow = (i + row + this.height) % this.height;
        liveNeighbours += Number(this.currentGrid[wrapedrow][wrapedcol]);
      }
    }
    console.log(liveNeighbours);

    return liveNeighbours;
  };

  private updateGrid = (): void => {
    const gen2 = this.nextGrid;
    this.nextGrid = this.currentGrid;

    this.currentGrid = gen2;
  };
}
