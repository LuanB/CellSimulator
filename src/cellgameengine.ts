// Cell board simulation engine

// board will be a grid of nested arrays x, y
// each cell box in the board will be alive = true, dead or empty = false

export type Grid = boolean[][];

// Game engine to hold game rules and logic

export class CellSimulatorEngine {
  //The next cell state should not be based on
  // the neigbours next state.
  // So we need two grids so that we can generate the generation 2 grid
  // from calucations of generation 1 grid.
  //Then we can switch the current generation grid to gen2grid

  private gen1Grid: Grid;

  private gen2Grid: Grid;

  public constructor(rows: number, columns: number) {
    // setting up the grids
    this.gen1Grid = this.emptyGrid(rows, columns);
    this.gen2Grid = this.emptyGrid(rows, columns);
  }

  // creates a board using with a x , y array. Each element is initialised
  //to false to represent empty cell.
  private emptyGrid = (rows: number, columns: number): Grid => {
    return Array(rows)
      .fill(false)
      .map(() => Array(columns).fill(false));
  };

  // allows to toggle the state of the cell at the board coordinates: dead -> alive or alive -> dead

  public toggleCell = (row: number, column: number): Grid => {
    this.gen1Grid[row][column] = !this.gen1Grid[row][column];
    return this.gen1Grid;
  };

  // get sum of live cells around the coordinates. With the edges we need to wrap it to the other side
  // using (row + height) % height

  private countLiveNeighbours = (row: number, column: number): number => {
    let liveNeighbours = 0;
    const gridcols = this.gen1Grid[0].length;
    const gridrows = this.gen1Grid.length;

    for (let i = row - 1; i <= row + i; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        let col = (j + gridcols) % gridcols;
        let row = (i + gridrows) % gridrows;
        liveNeighbours += Number(this.gen1Grid[row][col]);
      }
    }

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
    if (liveNeighbours === 3) {
      this.gen2Grid[row][column] = true;
    } else if (liveNeighbours > 3 || liveNeighbours < 2)
      this.gen2Grid[row][column] = false;
    else {
      this.gen2Grid[row][column] = this.gen1Grid[row][column];
    }
  };

  private updateGrid = (): void => {
    const gen2 = this.gen2Grid;
    this.gen2Grid = this.gen1Grid;

    this.gen1Grid = gen2;
  };

  public iterate = (): Grid => {
    this.gen1Grid.forEach((row: boolean[], roxIndex: number) => {
      row.forEach((_, columnIndex: number) => {
        const liveNeighbours = this.countLiveNeighbours(rowIndex, columnIndex);
        this.gen2CellState(rowIndex, columnIndex, liveNeighbours);
      });
    });

    this.updateGrid;
  };
}
