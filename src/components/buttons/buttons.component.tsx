import * as React from "react";

import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";

interface Props {
  nextGenButton: () => void;
  clear: () => void;
  gridSize: (evt: string) => void;
}

class Buttons extends React.Component<Props> {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button
            className="btn btn-default"
            onClick={this.props.nextGenButton}
          >
            Trigger Next Generation
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Reset
          </button>
          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1"> 20 x10 </Dropdown.Item>
            <Dropdown.Item eventKey="2"> 50 x30 </Dropdown.Item>
            <Dropdown.Item eventKey="3"> 70 x50 </Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
