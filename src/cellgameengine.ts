// Cell board simulation engine

// board will be a grid of nested arrays x, y
// each cell box in the board will be alive = true, dead or empty = false

export type Grid = boolean[][];

// Game engine to hold game rules and logic

export class CellSimulatorEngine {
  // We need two grids so that we can generate the generation 2 grid
  // from calucations of generation 1 grid. Then we can switch
  // the current generation grid to gen2grid

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
}
