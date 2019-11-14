import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sino";
import ReactDOM from "react-dom";
import App from "./App";
import Buttons from "./components/buttons/buttons.component";
import Grid from "./components/grid/grid.component";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Buttons and Grid components ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Grid)).to.have.lengthOf(1);
    expect(wrapper.find(Buttons)).to.have.lengthOf(1);
  });
});
