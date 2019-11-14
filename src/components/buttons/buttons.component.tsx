import * as React from "react";

import { ButtonToolbar } from "react-bootstrap";

interface Props {
  nextGenButton: () => void;
  clear: () => void;
}

class Buttons extends React.Component<Props> {
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button
            className="nxtGenbtn btn btn-default"
            onClick={this.props.nextGenButton}
          >
            Trigger Next Generation
          </button>
          <button
            className="resetbtn btn btn-default"
            onClick={this.props.clear}
          >
            Reset
          </button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
