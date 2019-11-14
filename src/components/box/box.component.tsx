import * as React from "react";

interface Props {
  boxClass: string;
  key: string;
  boxId: string;
  row: number;
  col: number;
  selectBox: (row: number, col: number) => void;
}

class Box extends React.Component<Props> {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  };

  render() {
    return <div className={this.props.boxClass} onClick={this.selectBox} />;
  }
}

export default Box;
