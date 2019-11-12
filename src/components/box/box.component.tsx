import * as React from "react";

interface Props {
  row: number;
  col: number;
  id: string;
  boxClass: string;
  selectBox: (row: number, col: number) => void;
}

class Box extends React.Component<Props> {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  };

  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={this.selectBox}
      />
    );
  }
}

export default Box;
