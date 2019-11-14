import * as React from "react";

import Box from "../box/box.component";

// interface BoxElement {
//   boxClass: string;
//   key: string;
//   boxId: string;
//   row: number;
//   col: number;
//   selectBox: (row: number, col: number) => void;
// }

interface Props {
  selectBox: (row: number, col: number) => void;
  gridFull: boolean[][];
  rows: number;
  cols: number;
  //rowsArr: BoxElement[];
}
interface BoxInputProps {
  boxClass: string;
  key: string;
  boxId: string;
  row: number;
  col: number;
  selectBox: (row: number, col: number) => void;
}

interface IState {}

class Grid extends React.Component<Props, IState> {
  render() {
    const width = this.props.cols * 14;
    //  var rowsArr: new Array() = [];
    //var rowsArr: string[] = [];
    //var rowsArr: [];
    //var rowsArr: BoxElement[] = [];
    var rowsArr: Array<JSX.Element> = [];
    //rowsArr: Array<BoxInputProps> = [];

    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div className="grid" style={{ width: width }}>
        {rowsArr}
      </div>
    );
  }
}

export default Grid;
