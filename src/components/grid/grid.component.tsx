import * as React from "react";

import Box from "../box/box.component";

interface BoxElement {
  boxClass: string;
  key: string;
  boxId: string;
  row: number;
  col: number;
  selectBox: Props.selectBox;
}

interface Props {
  selectBox: (row: number, col: number) => void;
  gridFull: boolean[][];
  rows: number;
  cols: number;
  Box: BoxElement;
}

class Grid extends React.Component<Props> {
  render() {
    const width = this.props.cols * 14;
    var rowsArr: BoxElement[] = [];

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
      <div
        className="grid"
        style={{
          width: width
        }}
      >
        {" "}
        {rowsArr}{" "}
      </div>
    );
  }
}

export default Grid;
