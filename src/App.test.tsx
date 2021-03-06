import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import ReactDOM from "react-dom";
import { App } from "./App";
import { Button } from "./components/buttons/button.component";
import { Grid } from "./components/grid/grid.component";
import { CellSimulatorEngine } from "./Cellgameengine";

const cellSimulation = new CellSimulatorEngine(10, 10);

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App cellSimulatorEngine={cellSimulation} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Buttons and Grid components ", () => {
    const wrapper = mount(<App cellSimulatorEngine={cellSimulation} />);
    expect(wrapper.find(Grid)).to.have.lengthOf(1);
    expect(wrapper.find(Button)).to.have.lengthOf(2);
  });
});
