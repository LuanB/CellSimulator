import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import ReactDOM from "react-dom";

import { Button } from "./button.component";

describe("Buttons component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Button id={"test"} label={"test"} onClick={() => {}} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("nxt Generation button click to call nextgenbutton prop function", () => {
    const clickCallback = sinon.spy();
    const wrapper = shallow(
      <Button id={"test"} label={"test"} onClick={clickCallback} />
    );
    wrapper.find("#test").simulate("click");
    expect(clickCallback.called).to.be.true;
  });
});
