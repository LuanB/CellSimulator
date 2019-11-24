import * as React from "react";
//import Box from "../box/box.component";
import * as CellEngine from "../../Cellgameengine";

interface IProps {
  selectBox: (row: number, col: number) => () => void;
  gridFull: CellEngine.Grid;
}

export const Grid = (props: IProps) => {
  const boardGrid = (board: CellEngine.Grid): JSX.Element[] => {
    return board.map((row: boolean[], rowIndex: number) => {
      const rowCells = row.map((cell: boolean, columnIndex: number) => {
        return renderCell(rowIndex, columnIndex, cell);
      });
      return <tr key={rowIndex}>{rowCells}</tr>;
    });
  };

  const renderCell = (
    row: number,
    column: number,
    value: boolean
  ): JSX.Element => {
    const key = row + "_" + column;
    return (
      <td
        id={"cell_" + key}
        key={key}
        className={"cell" + (value ? " -is-active" : "")}
        onMouseDown={props.selectBox(row, column)}
      >
        {value}
      </td>
    );
  };

  return (
    <div>
      <table className="game-grid">
        <tbody>{boardGrid(props.gridFull)}</tbody>
      </table>
    </div>
  );
};
