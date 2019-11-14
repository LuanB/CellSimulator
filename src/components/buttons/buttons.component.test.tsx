import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sino";
import ReactDOM from "react-dom";

import Buttons from "./buttons.component";

describe("Buttons component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Buttons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
